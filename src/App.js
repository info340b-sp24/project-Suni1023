// import logo from './logo.svg';
import './index.css';
import React, { useState, useEffect } from 'react';

import { GameCardList } from './components/GameCardList.js';
import { ProfilePage } from './components/ProfilePage.js';
import { SearchPage } from './components/SearchPage.js';
import { GameLibrary } from './components/GameLibrary.js';
import { Homepage } from './components/Homepage.js';
import { GameDetail } from './components/GameDetail.js';
import { AddGame } from './components/AddGame';
import { SignInPage } from './components/SignInPage.js';

import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import * as Static from './components/StaticPages';

import { SnackbarProvider } from 'notistack';
import { getDatabase, ref, onValue } from 'firebase/database';
 
function App(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();
    const gamesRef = ref(db, "allGames/");
    
    const gameUnregisterFunction = onValue(gamesRef, (snapshot) => {
      const gamesObj = snapshot.val();
      const gamesArr =  Object.keys(gamesObj).map((key) => {
        const singleGameCopy = {...gamesObj[key]};
        singleGameCopy.key = key;
        return singleGameCopy;
      });
      // Remove duplicates from game data
      // The below code was borrowed/modified from 
      // https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
      const GAME_DATA = gamesArr.filter((game1, i, games_arr) => {
        return gamesArr.findIndex((game2) => (game2.QueryName === game1.QueryName)) === i
      });
      setGames(GAME_DATA);
    })
    
    const authUnregisterFunction = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        console.log("signing in as:", firebaseUser.displayName);
        console.log("firebaseuser:", firebaseUser);
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        console.log("firebaseuser after adding fields:", firebaseUser);
        setCurrentUser(firebaseUser);
      } else {
        console.log("signed out");
        setCurrentUser(null);
      }
    })

    function cleanup() {
      authUnregisterFunction();
      gameUnregisterFunction();
    }
    return cleanup;
  });

  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <div>
        {/* <Navbar currentUser={currentUser}/> */}
        <Routes>
          <Route index element={<Static.WelcomePage />} />
          <Route path="/signin" element={<SignInPage currentUser={currentUser} />} />
          <Route path="*" element={<Static.ErrorPage />} />

          <Route path="/Homepage" element={<Homepage currentUser={currentUser} games={games}/>}></Route>
          <Route path="/GameLibrary" element={<GameLibrary currentUser={currentUser} games={games}/>} />
          <Route path="/GameDetail/:gameId" element={<GameDetail currentUser={currentUser} games={games} />} />
          
          <Route path="/SearchPage" element={<SearchPage currentUser={currentUser} games={games}/>}></Route>
          <Route path="/AddGame" element={<AddGame currentUser={currentUser} games={games}/>}></Route>
          <Route path="/ProfilePage" element={<ProfilePage currentUser={currentUser} games={games}/>}></Route>
        </Routes>

        {/* still for testing */}
        {/* <Homepage games={props.games} /> */}
        {/* <GameLibrary games={props.games} /> */}
        {/* <GameDetail gameData={props.games[2]} /> */}
        {/* <SearchPage games={props.games} /> */} 
        {/*<AddGame /> */ }
        {/* <ProfilePage games={props.games} /> */}
      </div>
    </SnackbarProvider>
  );
}

export default App;

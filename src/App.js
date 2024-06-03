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
 
function App(props) {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const auth = getAuth();
    
    const unregisterFunction = onAuthStateChanged(auth, (firebaseUser) => {
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
      unregisterFunction();
    }
    return cleanup;
  });

  return (
    
    <div>
      <Routes>
        <Route index element={<Static.WelcomePage />} />
        <Route path="/signin" element={<SignInPage currentUser={currentUser} />} />
        <Route path="/Homepage" element={<Homepage currentUser={currentUser} games={props.games}/>}></Route>
        <Route path="/GameLibrary" element={<GameLibrary games={props.games}/>} />
        <Route path="/GameDetail/:gameId" element={<GameDetail currentUser={currentUser} games={props.games} />} />
        
        <Route path="/SearchPage" element={<SearchPage games={props.games}/>}></Route>
        <Route path="/AddGame" element={<AddGame currentUser={currentUser} games={props.games}/>}></Route>
        <Route path="/ProfilePage" element={<ProfilePage currentUser={currentUser} games={props.games}/>}></Route>
        {/* <Route path="*" element={<Static.ErrorPage />} /> */}
      </Routes>

      {/* still for testing */}
      {/* <Homepage games={props.games} /> */}
      {/* <GameLibrary games={props.games} /> */}
      {/* <GameDetail gameData={props.games[2]} /> */}
      {/* <SearchPage games={props.games} /> */} 
      {/*<AddGame /> */ }
      {/* <ProfilePage games={props.games} /> */}
    </div>
  );
}

export default App;

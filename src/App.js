// import logo from './logo.svg';
import './index.css';
import { GameCardList } from './components/GameCardList.js';
import { ProfilePage } from './components/ProfilePage.js';
import { SearchPage } from './components/SearchPage.js';
import { GameLibrary } from './components/GameLibrary.js';
import { Homepage } from './components/Homepage.js';
import { GameDetail } from './components/GameDetail.js';
import { AddGame } from './components/AddGame';

import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import * as Static from './components/StaticPages';
 
function App(props) {
  
  return (
    
    <div>
      <Routes>
        <Route index element={<Static.WelcomePage />} />
        <Route path="/Homepage" element={<Homepage games={props.games}/>}></Route>
        <Route path="/GameLibrary" element={<GameLibrary games={props.games}/>}>
          {/* space for game detail inside game lib --sunny will do */}
          <Route path=":GameDetail" element={<GameDetail games={props.games[2]} />} />
        </Route>
        
        <Route path="/SearchPage" element={<SearchPage games={props.games}/>}></Route>
        <Route path="/AddGame" element={<AddGame games={props.games}/>}></Route>
        <Route path="/ProfilePage" element={<ProfilePage games={props.games}/>}></Route>
        {/* <Route path="*" element={<Static.ErrorPage />} /> */}
      </Routes>

      {/* still for testing */}
      {/* <Homepage games={props.games} /> */}
      {/* <GameLibrary games={props.games} /> */}
      {/* <GameDetail gameData={props.games[2]} /> */}
      {/* <SearchPage games={props.games} /> */} 
      {<AddGame />}
      {/* <ProfilePage games={props.games} /> */}
    </div>
  );
}

export default App;

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
 
function App(props) {
  
  return (
    
    <div>

      {/* <Homepage games={props.games} /> */}
      {/* <GameLibrary games={props.games} /> */}
      {/* <GameDetail gameData={props.games[2]} /> */}
      {/* <SearchPage games={props.games} /> */}
      {/* <AddGame /> */}
      {/* <ProfilePage games={props.games} /> */}
    </div>
  );
}

export default App;

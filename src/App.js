// import logo from './logo.svg';
import './index.css';
import { GameCardList } from './components/GameCardList.js';
import { ProfilePage } from './components/ProfilePage.js';
import { SearchPage } from './components/SearchPage.js';
import { GameLibrary } from './components/GameLibrary.js';
import Homepage from './components/Homepage.js';
import { GameDetail } from './components/GameDetail.js';
import { AddGame } from './components/AddGame';


function App(props) {
  
  return (
    <div>
      {/* <Homepage games={props.games} /> */}
      {/* <GameLibrary games={props.games} /> */}
      {/* <GameDetail gameData={props.games[2]} /> */}
      <SearchPage games={props.games} />
      {/* <AddGame /> */}
      {/* <ProfilePage games={props.games} /> */}
    </div>
  );
}

export default App;

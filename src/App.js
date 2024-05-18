// import logo from './logo.svg';
import './index.css';
import { GameCardList } from './components/GameCardList.js';
import { ProfilePage } from './components/ProfilePage.js';
import { SearchPage } from './components/SearchPage.js';
import { GameLibrary } from './components/GameLibrary.js';
import Homepage from './components/Homepage.js';
import { GameLibrary } from './components/GameLibrary.js';
import { GameDetail } from './components/GameDetail.js';

function App(props) {
  
  return (
    <div>
      {/* <SearchPage games={props.games} /> */}
      {/* <Homepage /> */}
      <ProfilePage games={props.games} />
      {/* <Footer /> */}
      {/* <GameLibrary games={props.games} /> */}
      {/* <GameDetail gameData={props.games[2]} /> */}
      
      
    </div>
  );
}

export default App;

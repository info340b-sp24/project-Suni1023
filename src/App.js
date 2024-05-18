// import logo from './logo.svg';
import './index.css';
import { GameCardList } from './components/GameCardList.js';
import { ProfilePage } from './components/ProfilePage.js';
import { SearchPage } from './components/SearchPage.js';
import { GameLibrary } from './components/GameLibrary.js';
import Homepage from './components/Homepage.js';

function App(props) {
  
  return (
    <div>
      <SearchPage games={props.games} />
      {/* <Homepage /> */}
      {/* <GameLibrary games={props.games} /> */}
      {/* <ProfilePage games={props.games} /> */}
      
    </div>
  );
}

export default App;

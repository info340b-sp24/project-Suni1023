// import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { GameCardList } from './components/GameCardList.js';
import { ProfilePage } from './components/ProfilePage.js';
import { SearchPage } from './components/SearchPage.js';
import Homepage from './components/Homepage.js';

function App(props) {
  
  return (
    <div>
      {/* <ProfilePage games={props.games.slice(5, 10)} /> */}
      {/* <Navbar /> */}
      <SearchPage games={props.games} />
      {/* <GameCardList games={props.games} /> */}
      {/* <Homepage /> */}
      <ProfilePage games={props.games} />
      {/* <Footer /> */}
      
      
    </div>
  );
}

export default App;

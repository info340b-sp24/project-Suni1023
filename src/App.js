// import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { GameCardList } from './components/GameCardList.js';
import { ProfilePage } from './components/ProfilePage.js';
import { Filters } from './components/Filters.js';
import Homepage from './components/Homepage.js';

function App(props) {
  
  return (
    <div>
      {/* <ProfilePage games={props.games.slice(5, 10)} /> */}
      {/* <Navbar /> */}
      {/* <Filters /> */}
      {/* <GameCardList games={props.games} /> */}
      <Homepage />
      <Footer />
      
      
    </div>
  );
}

export default App;

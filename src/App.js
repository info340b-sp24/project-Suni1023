// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { GameCardList } from './components/GameCardList.js';
import { ProfilePage } from './components/ProfilePage.js';

function App(props) {
  
  return (
    <div>
      {/* <Navbar /> */}
      {/* <GameCardList games={props.games} /> */}
      {/* <Footer /> */}
      <ProfilePage games={props.games.slice(5, 10)} />
    </div>
  );
}

export default App;

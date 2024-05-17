// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { GameCardList } from './components/GameCardList.js';

function App(props) {
  return (
    <div>
      <Navbar />
      <GameCardList games={props.games} />
      <Footer />
    </div>
  );
}

export default App;

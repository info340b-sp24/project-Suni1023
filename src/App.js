// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { GameCardList } from './components/GameCardList.js';
import { Filters } from './components/Filters.js';

function App(props) {

  return (
    <div>
      <Navbar />
      <Filters />
      <GameCardList games={props.games} />
      <Footer />
      
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { GameCardList } from './components/GameCardList.js';
import { Filters } from './components/Filters.js';

function App() {
  const FAKE = [
    {name: "Valorant", rating: 4, logo: "img/Valorant.webp"},
    {name: "League of Legends", rating: 3, logo: "img/lol-logo.png"},
    {name: "Destiny 2", rating: 5, logo: "img/Destiny2.webp"}
  ]

  return (
    <div>
      <Navbar />
      <GameCardList games={FAKE} />
      <Footer />
      <Filters />
    </div>
  );
}

export default App;

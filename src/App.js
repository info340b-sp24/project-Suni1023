// import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { GameCardList } from './components/GameCardList.js';
import { ProfilePage } from './components/ProfilePage.js';
import { Filters } from './components/Filters.js';

function App(props) {
  
  return (
    <div>
      {/* <GameCardList games={props.games} /> */}
      {/* <ProfilePage games={props.games.slice(5, 10)} /> */}
      <div>
      <Navbar />
      <div className="content">
        <Filters />
        <GameCardList games={props.games} />
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;

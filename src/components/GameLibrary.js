import React from 'react';
import { GameCard } from './GameCard.js';
import Navbar  from './Navbar.js';
import Footer from './Footer.js';


export function GameLibrary(props) {
    const gameCards = props.games.map((game) => {
        return <GameCard key={game.QueryName} gameData={game} currentUser={props.currentUser} />
    });

    return (
        <div>
            <Navbar currentUser={props.currentUser}/>
            <div className="game-library">
                <h1 className="library-title">Game Library</h1>
                {gameCards}
            </div>
            <Footer />
        </div>
        
    );
}
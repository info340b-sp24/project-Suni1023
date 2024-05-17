import React from 'react';
import { GameCard } from './GameCard.js';

export function GameCardList(props) {
    const gameCards = props.games.map((game) => {
        return <GameCard key={game.QueryName} gameData={game} />
    });
    
    return (
        <div className="game-library">
            {gameCards}
        </div>
    );
}
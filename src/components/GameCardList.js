import React from 'react';
import { GameCard } from './GameCard.js';

export function GameCardList(props) {
    const gameCards = props.games.map((game) => {
        return <GameCard gameData={game} />
    });
    
    return (
        <div class="game-library">
            {gameCards}
        </div>
    );
}
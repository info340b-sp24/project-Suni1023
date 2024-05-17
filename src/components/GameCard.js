import React from 'react';

export function GameCard(props) {
    const gameData = props.gameData;
    // Create star rating HTML from game data
    let stars = [];
    for (var i = 0; i < gameData.rating; i++) {
        stars.push(<span key={i} className="full-star">★</span>);
    }
    // TODO: games should link to their game detail page (the href below that points to game-detail.html should point to smth else)
    // this probably involves having a component for the game detail page that will take gameData as a prop?
    
    return (
        <div class="game-container">
            <img src={gameData.logo} alt={`Game logo for ${gameData.name}`} class="game-image" />
                <div class="game-info">
                    <a href="game-detail.html" class="game-title">{gameData.name}</a>
                <div class="rating">
                    {stars} 
                    <span class="ratio">({gameData.rating}/5)</span>
                </div>
            </div>
        </div>
    );
}
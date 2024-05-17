import React from 'react';

export function GameCard(props) {
    const gameData = props.gameData;
    // Create star rating HTML from game data
    let stars = [];
    for (var i = 0; i < gameData.Metacritic; i++) {
        stars.push(<span key={i} className="full-star">★</span>);
    }
    // TODO: games should link to their game detail page (the href below that points to game-detail.html should point to smth else)
    // this probably involves having a component for the game detail page that will take gameData as a prop?
    
    return (
        <div className="game-container">
            <img src={gameData.logo} alt={`Game logo for ${gameData.QueryName}`} class="game-image" />
                <div className="game-info">
                    <a href="game-detail.html" className="game-title">{gameData.QueryName}</a>
                <div className="rating">
                    {stars} 
                    <span className="ratio">({gameData.Metacritic}/5)</span>
                </div>
            </div>
        </div>
    );
}
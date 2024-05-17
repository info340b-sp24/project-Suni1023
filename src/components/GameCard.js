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
            <img src={gameData.logo} alt={`Game logo for ${gameData.QueryName}`} className="game-image" />
                <div className="game-info">
                    <a href="game-detail.html" className="game-title">{gameData.QueryName}</a>
                <div className="rating">
                    {stars} 
                    <span className="ratio">({gameData.Metacritic}/5)</span>
                </div>
                <div className='game-genrel'>
                    <span className='genrel-type'>
                        {gameData.GenreIsIndie && <span className='genreType'>Genre: Indie</span>}
                        {gameData.GenreIsAction && <span className='genreType'>Genre: Action</span>}
                        {gameData.GenreIsAdventure && <span className='genreType'>Genre: Adventure</span>}
                        {gameData.GenreIsCasual && <span className='genreType'>Genre: Casual</span>}
                        {gameData.GenreIsStrategy && <span className='genreType'>Genre: Strategy</span>}
                        {gameData.GenreIsRPG && <span className='genreType'>Genre: RPG</span>}
                        {gameData.GenreIsSimulation && <span className='genreType'>Genre: Simulation</span>}
                        {gameData.GenreIsEarlyAccess && <span className='genreType'>Genre: Early Access</span>}
                        {gameData.GenreIsFreeToPlay && <span className='genreType'>Genre: Free To Play</span>}
                        {gameData.GenreIsSports && <span className='genreType'>Genre: Sports</span>}
                        {gameData.GenreIsRacing && <span className='genreType'>Genre: Racing</span>}
                        {gameData.GenreIsMassivelyMultiplayer && <span className='genreType'>Genre: Massively Multiplayer</span>}
                    </span>
                </div>
            </div>
        </div>
    );
}
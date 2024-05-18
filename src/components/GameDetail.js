import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export function GameDetail(props) {
    const gameData = props.gameData;
    if (!gameData.DetailedDescrip) return <p>No game data available.</p>;

    return (
        <div>
            <Navbar />
            <div className="detail-container">
                <div className="detail-image">
                    <img className='detail-img' src={gameData.logo} alt={`Game logo for ${gameData.QueryName}`} />
                </div>
                <div className="detail-content">
                    <div className="detail-description">
                        <h1 className="detail-game-title">{gameData.QueryName}</h1>
                        <p className="description">
                            {gameData.DetailedDescrip}
                        </p>
                    </div>
                    <div className="other-details">
                        <ul className="detail-list">
                            <li>
                                <time className="detail-publish-time">Published year: {gameData.ReleaseDate}</time>
                            </li>
                            <li>
                                <span className='game-price'>Price: ${gameData.PriceFinal}</span>
                            </li>
                            <li>
                                <span className="detail-model">
                                    Platform:
                                    {gameData.PlatformWindows && <span className='platformType'> Windows, </span>}
                                    {gameData.PlatformLinux && <span className='platformType'> Linux, </span>}
                                    {gameData.PlatformMac && <span className='platformType'> Mac </span>}
                                </span> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

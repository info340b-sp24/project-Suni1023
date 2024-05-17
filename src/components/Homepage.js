import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Homepage = () => {
    const [showGameDetails, setShowGameDetails] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');

    const handleGetGameClick = () => {
        setShowGameDetails(true);
        setSaveMessage('');
    };

    const handleSaveClick = () => {
        setSaveMessage("It's already saved to your list!");
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Having trouble finding new games to play?</h1>
                <div className="image">
                    < img src="img/gamebg.jpg" alt="This is our background image" aria-label="This is a decorative background image" className="start" />
                </div>
                <p>
                    Try our website! Our website is designed for game recommendation among various genres.
                    You can access game reviews through Game Library, add a game, search games, and get your daily game
                    recommendation queue use this generator!
                </p >
                <div className="Botton-container">
                    <button className="getTodayButton" onClick={handleGetGameClick}>Get today's new Game!</button>
                </div>
            </div>
            {showGameDetails && (
                <div className="container-game detail">
                    <div className="gameDetails">
                        <p className="gameMessage">
                            WoW! You got ...
                        </p >
                        <p>
                            Phoenix Wright: Ace Attorney Trilogy
                        </p >
                        < img src="img/capsule_616x353.jpeg" alt="Phoenix Wright: Ace Attorney Trilogy" aria-label="This is a game called Phoenix Wright: Ace Attorney Trilogy" />
                        <div className="resetsave">
                            <button className="resetButton" onClick={() => setShowGameDetails(false)}>Reset</button>
                            <button className="saveButton" onClick={handleSaveClick}>Save to my list</button>
                        </div>
                    </div>
                </div>
            )}
            {saveMessage && <p>{saveMessage}</p >}
            <Footer />
        </div>
    );
};

export default Homepage;
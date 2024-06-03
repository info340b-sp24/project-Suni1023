import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import { getDatabase, ref, set } from "firebase/database";

export function Homepage(props) {
    const [showGameDetails, setShowGameDetails] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedGame, setSelectedGame] = useState(null);

    const handleGetGameClick = () => {
        const randomIndex = Math.floor(Math.random() * props.games.length);
        setSelectedGame(props.games[randomIndex]);
        setShowGameDetails(true);
        setSaveMessage('');
        setErrorMessage('');
    };

    const handleSaveClick = () => {
        if (!props.currentUser) {
            setErrorMessage("Please sign in to bookmark games.");
            return;
        }

        const db = getDatabase();
        const bookmarkRef = ref(db, 'users/' + props.currentUser.uid + '/bookmarks/' + selectedGame.QueryName);

        set(bookmarkRef, selectedGame)
            .then(() => {
                setSaveMessage("Game bookmarked successfully!");
                setErrorMessage('');
            })
            .catch((error) => {
                setErrorMessage("Error bookmarking game: " + error.message);
                setSaveMessage('');
            });
    };

    return (
        <div>
            <Navbar currentUser={props.currentUser}/>
            <div className="container">
                <h1>Having trouble finding new games to play?</h1>
                <div className="background">
                    <ImageSlider />
                </div>
                <p>
                    Try our Game Finder! Our website is designed for game recommendation among various genres.
                    You can access game reviews through Game Library, add a game, search games, and get your daily game
                    recommendation queue use this generator!
                </p>
                <div className="Botton-container">
                    <button className="getTodayButton" onClick={handleGetGameClick}>Get today's new Game!</button>
                </div>
                {saveMessage && 
                    <div className="alert alert-primary" role="alert">
                        {saveMessage}
                    </div>
                }
                {errorMessage && 
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                }
            </div>
            {showGameDetails && selectedGame && (
                <div className="container-gamedetail">
                    <div className="gameDetails">
                        <p className="gameMessage">
                            WoW! You got ...
                        </p>
                        <p>
                            {selectedGame.QueryName}
                        </p>
                        <img src={selectedGame.logo} alt={selectedGame.QueryName} aria-label={`This is a game called ${selectedGame.QueryName}`} />
                        <div className="resetsave">
                            <button className="resetButton" onClick={() => setShowGameDetails(false)}>Reset</button>
                            <button className="saveButton" onClick={handleSaveClick}>Add a bookmark</button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}



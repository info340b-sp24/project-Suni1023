import React from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";
import { useSnackbar } from 'notistack';

export function GameCard(props) {
    const { enqueueSnackbar } = useSnackbar();
    const gameData = props.gameData;
    const currentUser = props.currentUser;

    const handleBookmark = () => {
        if (!currentUser) {
            enqueueSnackbar("Please sign in to bookmark games.", { variant: 'error' });
            return;
        }

        const db = getDatabase();
        const bookmarkRef = ref(db, 'users/' + currentUser.uid + '/bookmarks/' + gameData.QueryName);
        set(bookmarkRef, gameData)
            .then(() => {
                enqueueSnackbar("Game bookmarked successfully!", { variant: 'success' });
            })
            .catch((error) => {
                enqueueSnackbar("Error bookmarking game: " + error.message, { variant: 'error' });
            });
    };

    let stars = [];
    for (var i = 0; i < gameData.Metacritic; i++) {
        stars.push(<span key={i} className="full-star">★</span>);
    }

    return (
        <div className="game-container">
            <img src={gameData.logo} alt={`Game logo for ${gameData.QueryName}`} className="game-image" />
            <div className="game-info">
                <Link to={`/GameDetail/${gameData.QueryName}`} className="game-title">{gameData.QueryName}</Link>
                <div className="rating">{stars} <span className="ratio">({gameData.Metacritic}/5)</span></div>
            </div>
            <div className='game-genrel'>
                <span className='genrel-type'>
                    {gameData.GenreIsIndie && <span className='genreType'><strong>Genre</strong>: Indie </span>}
                    {gameData.GenreIsAction && <span className='genreType'><strong>Genre</strong>: Action </span>}
                    {gameData.GenreIsAdventure && <span className='genreType'><strong>Genre</strong>: Adventure </span>}
                    {gameData.GenreIsCasual && <span className='genreType'><strong>Genre</strong>: Casual </span>}
                    {gameData.GenreIsStrategy && <span className='genreType'><strong>Genre</strong>: Strategy </span>}
                    {gameData.GenreIsRPG && <span className='genreType'><strong>Genre</strong>: RPG </span>}
                    {gameData.GenreIsSimulation && <span className='genreType'><strong>Genre</strong>: Simulation </span>}
                    {gameData.GenreIsEarlyAccess && <span className='genreType'><strong>Genre</strong>: Early Access </span>}
                    {gameData.GenreIsFreeToPlay && <span className='genreType'><strong>Genre</strong>: Free To Play </span>}
                    {gameData.GenreIsSports && <span className='genreType'><strong>Genre</strong>: Sports </span>}
                    {gameData.GenreIsRacing && <span className='genreType'><strong>Genre</strong>: Racing </span>}
                    {gameData.GenreIsMassivelyMultiplayer && <span className='genreType'><strong>Genre</strong>: Massively Multiplayer </span>}
                </span>
            </div>
            <button className='bookmark-button' onClick={handleBookmark}>Bookmark</button>
        </div>
    );
}


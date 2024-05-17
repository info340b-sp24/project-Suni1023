import React from 'react';

export function GameDetail(props) {
    const gameData = props.gameData;
    return (
        <div class="detail-description">
            <h1 class="detail-game-title">{gameData.QueryName}</h1>
            <p class="description">
                {gameData.DetailedDescrip};
            </p>
        </div>
    );
}
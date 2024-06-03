import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { GameCardList } from './GameCardList';

// TODO: fix the CSS a bit

export function SearchPage(props) {
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState({
        indie: false,
        action: false,
        adventure: false,
        casual: false,
        rpg: false,
        simulation: false,
        earlyaccess: false,
        freetoplay: false,
        sports: false,
        racing: false,
        massivelymultiplayer: false,
        free: false,
        lowPrice: false,
        mediumPrice: false,
        highPrice: false,
        oneStar: false,
        twoStar: false,
        threeStar: false,
        fourStar: false,
        fiveStar: false,
        windows: false,
        mac: false,
        linux: false
    });
    const [releaseYear, setReleaseYear] = useState('');
    // const [games, filterGames] = useState(props.games);

    const handleSearch = (event) => {
        let newValue = event.target.value;
        // let newGames = props.games;
        // newGames = newGames.filter((game) => game.QueryName.startsWith(newValue));
        setSearch(newValue);
        // filterGames(newGames);
    }
    
    const handleBox = (event) => {
        let newFilters = {...filters};
        newFilters[event.target.name] = !newFilters[event.target.name];
        
        setFilters(newFilters);

        // let newGames = props.games;
        // const platforms = ["Windows", "Mac", "Linux"];
        // platforms.map((platform) => {
        //     if (filters[platform.toLowerCase()]) {
        //         newGames = newGames.filter((game) => game["Platform" + platform]);
        //     }
        // });
        
        // let genres = ["Indie", "Action", "Adventure", "Casual", "RPG", "Simulation",
        //     "EarlyAccess", "FreeToPlay", "Sports", "Racing", "MassivelyMultiplayer"]
        // genres.map((genre) => {
        //     if (filters[genre.toLowerCase()]) {
        //         newGames = newGames.filter((game) => game["GenreIs" + genre]);
        //     }
        // });

        // let prices = ["free", "lowPrice", "mediumPrice", "highPrice"];
        // prices.map((price) => {
        //     if (filters[price]) {
        //         newGames = newGames.filter((game) => {
        //             if (game.PriceFinal === 0.0 && price === "free") {
        //                 return game;
        //             } else if (game.PriceFinal <= 9.99 && price === "lowPrice") {
        //                 return game;
        //             } else if (game.priceFinal <= 19.99 && price === "mediumPrice") {
        //                 return game;
        //             } else if (price === "highPrice") {
        //                 return game;
        //             }
        //         })
        //     }
        // });

        // filterGames(newGames);
    }
    
    const handleYear = (event) => {
        let newYear = event.target.value;
        // let newGames = props.games;
        setReleaseYear(newYear);
        // if (newYear.toString().length === 4) {
        //     newGames = newGames.filter((game) => game.ReleaseDate.toString().startsWith(newYear));
        //     filterGames(newGames);
        // }
    }

    let newGames = props.games;
    // First, filter by the search keyword
    newGames = newGames.filter((game) => game.QueryName.startsWith(search));

    // Then, go through all checkbox filters (platform, genre, price)
    const platforms = ["Windows", "Mac", "Linux"];
    platforms.map((platform) => {
        if (filters[platform.toLowerCase()]) {
            newGames = newGames.filter((game) => game["Platform" + platform]);
        }
    });
    
    let genres = ["Indie", "Action", "Adventure", "Casual", "RPG", "Simulation",
        "EarlyAccess", "FreeToPlay", "Sports", "Racing", "MassivelyMultiplayer"]
    genres.map((genre) => {
        if (filters[genre.toLowerCase()]) {
            newGames = newGames.filter((game) => game["GenreIs" + genre]);
        }
    });

    let prices = ["free", "lowPrice", "mediumPrice", "highPrice"];
    prices.map((price) => {
        if (filters[price]) {
            newGames = newGames.filter((game) => {
                if (game.PriceFinal === 0.0 && price === "free") {
                    return game;
                } 
                if (game.PriceFinal <= 9.99 && price === "lowPrice") {
                    return game;
                }
                if (game.priceFinal <= 19.99 && price === "mediumPrice") {
                    return game;
                }
                if (game.PriceFinal > 19.99 && price === "highPrice") {
                    return game;
                }
            })
        }
    });

    // Finally, filter by year
    if (releaseYear.toString().length === 4) {
        newGames = newGames.filter((game) => game.ReleaseDate.toString().startsWith(releaseYear));
    }

    return (
        <div>
            <Navbar />
            <div className="search-page">
                <h1 className='search-game-heading'>Search Game</h1>
                <div className="content-container">
                    <div className="filters"> 

                        <div className="search-bar">
                            <input type="text" id="search" name="search" placeholder="Search" onChange={handleSearch} value={search}/>
                        </div>
                    
                    <div className="category-container">
                    <div className="genre">
                        <h2> Genre</h2>
                        <label>
                            <input type="checkbox" name="indie" checked={filters.indie} onChange={handleBox}/> Indie
                        </label>

                        <label>
                            <input type="checkbox" name="action" checked={filters.action} onChange={handleBox}/> Action
                        </label>

                        <label>
                            <input type="checkbox" name="adventure" checked={filters.adventure} onChange={handleBox}/> Adventure
                        </label>

                        <label>
                            <input type="checkbox" name="casual" checked={filters.casual} onChange={handleBox}/> Casual
                        </label>

                        <label>
                            <input type="checkbox" name="rpg" checked={filters.rpg} onChange={handleBox}/> RPG
                        </label>

                        <label>
                            <input type="checkbox" name="simulation" checked={filters.simulation} onChange={handleBox}/> Simulation
                        </label>

                        <label>
                            <input type="checkbox" name="earlyaccess" checked={filters.earlyaccess} onChange={handleBox}/> Early Access
                        </label>

                        <label>
                            <input type="checkbox" name="freetoplay" checked={filters.freetoplay} onChange={handleBox}/> Free to play
                        </label>

                        <label>
                            <input type="checkbox" name="sports" checked={filters.sports} onChange={handleBox}/> Sports
                        </label>

                        <label>
                            <input type="checkbox" name="racing" checked={filters.racing} onChange={handleBox}/> Racing
                        </label>

                        <label>
                            <input type="checkbox" name="massivelymultiplayer" checked={filters.massivelymultiplayer} onChange={handleBox}/> Massively Multiplayer
                        </label>
                    </div>
                </div>

                <div className="category-container">
                        <div className="price">
                            <h2> Price</h2>
                            <label>
                                <input type="checkbox" name="free" checked={filters.free} onChange={handleBox}/> Free
                            </label>
                    
                            <label>
                                <input type="checkbox" name="lowPrice" checked={filters.lowPrice} onChange={handleBox}/> $
                            </label>
                    
                            <label>
                                <input type="checkbox" name="mediumPrice" checked={filters.mediumPrice} onChange={handleBox}/> $$
                            </label>
                    
                            <label>
                                <input type="checkbox" name="highPrice" checked={filters.highPrice} onChange={handleBox}/> $$$
                            </label>
                        </div>
                    </div>

                    <div className="category-container">
                        <div className="rating-search">
                            <h2> Rating</h2>
                            <div className="rating-star">
                                <label>
                                    <input type="checkbox" name="oneStar" checked={filters.oneStar} onChange={handleBox}/> ★
                                </label>

                                <label>
                                    <input type="checkbox" name="twoStar" checked={filters.twoStar} onChange={handleBox}/> ★★
                                </label>

                                <label>
                                    <input type="checkbox" name="threeStar" checked={filters.threeStar} onChange={handleBox}/> ★★★
                                </label>

                                <label>
                                    <input type="checkbox" name="fourStar" checked={filters.fourStar} onChange={handleBox}/> ★★★★
                                </label>

                                <label>
                                    <input type="checkbox" name="fiveStar" checked={filters.fiveStar} onChange={handleBox}/> ★★★★★
                                </label>
                        </div>
                    </div>
                </div>

                    <div className="category-container">
                        <div className="platform">
                            <h2> Platform</h2>
                                <label>
                                    <input type="checkbox" name="windows" checked={filters.windows} onChange={handleBox}/> Windows
                                </label>
                        
                                <label>
                                    <input type="checkbox" name="mac" checked={filters.mac} onChange={handleBox}/> Mac
                                </label>
                        
                                <label>
                                    <input type="checkbox" name="linux" checked={filters.linux} onChange={handleBox}/> Linux
                                </label>
                            </div>
                    </div>


                    <div className="category-container">
                        <div className="release-year">
                            <h2> Release Year</h2>
                            <label>
                                <input type="number" id="year" name="year" onChange={handleYear} value={releaseYear} />
                            </label>
                        </div>
                    </div>
                </div>
                <GameCardList games={newGames} />
            </div>
        </div>
        <Footer />
    </div>
    );
}
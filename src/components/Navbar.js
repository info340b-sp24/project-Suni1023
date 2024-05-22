import React from 'react';

export default function Navbar() {
    return (
        <div>
            <header className="menu">
                <ul className="menu-container">
                    <a href="#menu"><i className="fa fa-bars" aria-label="menu"></i></a>
                    <li><img src="img/favicon.png" className="favicon" alt="favicon" /></li>
                </ul>

                <nav className="nav-menu">
                    <img src="img/favicon.png" alt="favicon" />
                    <ul>
                        <li><a href="index.html">Homepage</a></li>
                        <li><a href="game-library.html">Game Library</a></li>
                        <li><a href="search-page.html">Search Game</a></li>
                        <li><a href="add-new-game.html">Add a new game</a></li>
                        <li><a href="user-profile.html">User Profile</a></li>
                    </ul>
                </nav>
            </header>

        
            <header className="menu-line">
                <nav>
                    <ul className="nav_links">
                        <li><a href="index.html">Homepage</a></li>
                        <li><a href="game-library.html">Game Library</a></li>
                        <li><a href="search-page.html">Search Game</a></li>
                        <li><a href="add-new-game.html">Add a new game</a></li>
                    </ul>
                </nav>
                <a href="user-profile.html" className="cta"><button>User Profile</button></a>
            </header>
        </div>
    );
}
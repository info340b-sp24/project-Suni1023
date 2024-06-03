import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignOut = (event) => {
        signOut(getAuth());
        console.log("signing out");
    }

    const isLoggedIn = props.currentUser && props.currentUser.uid;

    return (
        <nav>
            <NavLink to="/Homepage" className="title">
                Game Finder
            </NavLink>

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/Homepage">Homepage</NavLink></li>
                <li><NavLink to="/GameLibrary">Game Library</NavLink></li>
                <li><NavLink to="/SearchPage">Search Game</NavLink></li>
                <li><NavLink to="/AddGame">Add a new game</NavLink></li>
                {isLoggedIn ? (
                    <>
                        <li><NavLink to="/ProfilePage">User Profile</NavLink></li>
                        <li><button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button></li>
                    </>
                ) : (
                    <li><NavLink to="/signin">Login</NavLink></li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;

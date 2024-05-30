import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignOut = (event) => {
        console.log("signing out");
    }

    return (
        <nav>
            <NavLink to="/Homepage" className="title">
                Game Finder
            </NavLink>

            <div className="menu-icon" onClick={() => {
                setMenuOpen(!menuOpen);
            }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/Homepage">Homepage</NavLink>
                </li>
                <li>
                    <NavLink to="/GameLibrary">Game Library</NavLink>
                </li>
                <li>
                    <NavLink to="/SearchPage">Search Game</NavLink>
                </li>
                <li>
                    <NavLink to="/AddGame">Add a new game</NavLink>
                </li>
                <li>
                    <NavLink to="/ProfilePage">User Profile</NavLink>
                </li>
                
                {/* <li className="sign-out">
//               <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
//             </li> */}
            </ul>
        </nav>
    );
}
export default Navbar;


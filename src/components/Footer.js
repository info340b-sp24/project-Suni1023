import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
            <p><a href="index.html"><span className="material-icons">home</span>Home</a></p>
            <p><a href="search-page.html"><span className="material-icons">search</span>Search</a></p>
            <p><a href="mailto:email@group-bb.uw.edu"><span className="material-icons">email</span> email@group-bb.uw.edu</a></p>
            </div>
            <div className="copyright">
            <p>&copy; 2024 Game Library. All rights reserved.</p>
            </div>
        </footer>
    );
}
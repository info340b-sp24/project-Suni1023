import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { GameCardList } from './GameCardList';
import { getAuth, signOut } from 'firebase/auth';

// TODO: fix broken CSS, clean up the page generally
// TODO: grab saved games/history from firebase and render it here

export function ProfilePage(props) {
    // depending on which link is clicked, change state and conditionally render body
    const [currentTab, setCurrentTab] = useState('publish');

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    }

    if (props.currentUser === null) { // if not signed in
        return <Navigate to="/signin" />;
    }

    const signOutCallback = () => {
        const auth = getAuth();
        signOut(auth).catch(err => console.log(err));
    }
    
    return (
        <div>
            <Navbar />
            <section className="container-fluid text-white bg-header mb-4 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-lg-2 m-0 p-2">
                            <img src="img/default_pfp.png" alt="user profile picture" height="100px" width="100px" />
                        </div>
                        <div className="col-4 col-lg-2 py-4 px-0">
                            <h1>{props.currentUser.userName}</h1>
                        </div>
                    </div>
                </div>

                <nav className="profile_link_nav">
                    <ul className="profile_links">
                        <li><a href="#" onClick={() => handleTabChange('publish')}>Publish</a></li>
                        <li><a href="#" onClick={() => handleTabChange('bookmarks')}>Bookmarks</a></li>
                        <li><a href="#" onClick={() => handleTabChange('history')}>History</a></li>
                        <li><a href="#" onClick={signOutCallback}>Sign out</a></li>
                    </ul>
                </nav>
            </section>

            {currentTab === 'publish' &&
                <main>
                    <div className="container">
                        <h1 className="profile-prompt">You don't have any posts yet. Would you like to <em>post a new review</em> or go to the <em>Game Library?</em></h1>
                    </div>
                </main>
            }

            {currentTab === 'bookmarks' &&
                <GameCardList games={props.games} />
            }

            {currentTab === 'history' &&
                <GameCardList games={props.games} />
            }
            <Footer />
        </div>
    );
}
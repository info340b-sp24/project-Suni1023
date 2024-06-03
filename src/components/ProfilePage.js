import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { GameCardList } from './GameCardList';
import { getAuth, signOut } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';

// TODO: fix broken CSS, clean up the page generally

export function ProfilePage(props) {
     // depending on which link is clicked, change state and conditionally render body

    const [currentTab, setCurrentTab] = useState('publish');
    const [bookmarkedGames, setBookmarkedGames] = useState([]);
    const [viewingHistory, setViewingHistory] = useState([]);

    useEffect(() => {
        if (props.currentUser !== null) {
            const db = getDatabase();
            const bookmarkRef = ref(db, "users/" + props.currentUser.userId + "/bookmarks");
            const historyRef = ref(db, "users/" + props.currentUser.userId + "/viewingHistory");
            
            const bookmarkUnregisterFunction = onValue(bookmarkRef, (snapshot) => {
                if (snapshot.exists()) {
                    const bookmarks = snapshot.val();
                    const bookmarkArray = Object.keys(bookmarks).map((key) => {
                        const singleBookmarkCopy = {...bookmarks[key]};
                        singleBookmarkCopy.key = key;
                        return singleBookmarkCopy;
                    });
                    setBookmarkedGames(bookmarkArray);
                } else {
                    setBookmarkedGames([]);
                }
            });

            const historyUnregisterFunction = onValue(historyRef, (snapshot) => {
                if (snapshot.exists()) {
                    const viewingHistory = snapshot.val();
                    const histArray = Object.keys(viewingHistory).map((key) => {
                        const singleHistCopy = {...viewingHistory[key]};
                        singleHistCopy.key = key;
                        return singleHistCopy;
                    });
                    setViewingHistory(histArray);
                } else {
                    setViewingHistory([]);
                }
            });

            function cleanup() {
                bookmarkUnregisterFunction();
                historyUnregisterFunction();
            }

            return cleanup;
        }
    })

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
                <GameCardList games={bookmarkedGames} currentUser={props.currentUser} />
            }

            {currentTab === 'history' &&
                <GameCardList games={viewingHistory} currentUser={props.currentUser} />
            }

            <Footer />
        </div>
    );
}

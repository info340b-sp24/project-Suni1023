import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { GameCardList } from './GameCardList';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: fix broken CSS, clean up the page generally
// TODO: grab saved games/history from firebase and render it here

export function ProfilePage(props) {
     // depending on which link is clicked, change state and conditionally render body

    const [currentTab, setCurrentTab] = useState('publish');
    const [bookmarkedGames, setBookmarkedGames] = useState([]);
    const [viewingHistory, setViewingHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
        if (tab === 'bookmarks') {
            fetchBookmarkedGames();
        } else if (tab === 'history') {
            fetchViewingHistory();
        }
    }

    const fetchBookmarkedGames = async () => {
        setLoading(true);
        try {
            const db = getFirestore();
            const bookmarksCollection = collection(db, "users", props.currentUser.uid, "bookmarks");
            const bookmarksSnapshot = await getDocs(bookmarksCollection);
            const bookmarksList = bookmarksSnapshot.docs.map(doc => doc.data());
            console.log('Fetched bookmarked games:', bookmarksList);
            setBookmarkedGames(bookmarksList);
        } catch (error) {
            console.error('Error fetching bookmarked games:', error);
        }
        setLoading(false);
    };

    const fetchViewingHistory = async () => {
        setLoading(true);
        try {
            const db = getFirestore();
            const historyCollection = collection(db, "users", props.currentUser.uid, "viewingHistory");
            const historySnapshot = await getDocs(historyCollection);
            const historyList = historySnapshot.docs.map(doc => doc.data());
            console.log('Fetched viewing history:', historyList);
            setViewingHistory(historyList);
        } catch (error) {
            console.error('Error fetching viewing history:', error);
        }
        setLoading(false);
    };


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

            {currentTab === 'bookmarks' && !loading &&
                <GameCardList games={bookmarkedGames} currentUser={props.currentUser} />
            }

            {currentTab === 'history' && !loading &&
                <GameCardList games={viewingHistory} currentUser={props.currentUser} />
            }

            {loading && <p>Loading...</p>}

            <Footer />
        </div>
    );
}

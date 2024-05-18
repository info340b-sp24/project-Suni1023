import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { GameCardList } from './GameCardList';

export function ProfilePage(props) {
    // depending on which link is clicked, change state and conditionally render body
    const [currentTab, setCurrentTab] = useState('publish');

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
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
                            <h1>John Doe</h1>
                        </div>
                    </div>
                </div>

                <nav className="profile_link_nav">
                    <ul className="profile_links">
                        <li><a href="user-profile.html" onClick={() => handleTabChange('publish')}>Publish</a></li>
                        <li><a href="#" onClick={() => handleTabChange('bookmarks')}>Bookmarks</a></li>
                        <li><a href="#" onClick={() => handleTabChange('history')}>History</a></li>
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
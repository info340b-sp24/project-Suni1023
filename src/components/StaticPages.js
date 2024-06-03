import React from 'react';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';

export function WelcomePage(props) {
    return (
        
      <div>
        <Navbar />
        <div>
            <h2>Welcome to Game Finder!</h2>
            <p>The latest and greatest Game Exploration app</p>
            <p>
                Try our Game Finder! Our website is designed for game recommendation among various genres.
                You can access game reviews through Game Library, add a game, search games, and get your daily game
                recommendation queue!
            </p>
          {/* <p>Sign in to get started!</p> */}
          <p><a href="/signin">Sign in to get started!</a></p>
          <ImageSlider />
        </div>
      </div>
    );
  }

export function ErrorPage(props) {
    return(
        <div>
            <Navbar />
            <p className="alert alert-danger">Page not found</p>
        </div>
    );
    
    
}
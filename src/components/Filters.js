import React, { useState } from 'react';

export function Filters(props) {

    const [search, setSearch] = useState('');
    const [check, setChecked] = useState('false');

    const handleChange = (event) => {
        let newValue = event.target.value
        setSearch(newValue);
    }
    
    function handleBox(event) {
        setChecked(event.target.checked);
      }


    return (
        <div class="filters"> 

            <div class="search-bar">
                <input type="text" id="search" name="search" placeholder="Search" onChange={handleChange} value={search}/>
                <button>Submit</button>
            </div>
        
        <div class="category-container">
        <div class="genre">
            <h2> Genre</h2>
            <label>
                <input type="checkbox" name="indie" checked={check} onChange={handleBox}/> Indie
            </label>

            <label>
                <input type="checkbox" name="action"/> Action
            </label>

            <label>
                <input type="checkbox" name="adventure"/> Adventure
            </label>

            <label>
                <input type="checkbox" name="casual"/> Casual
            </label>

            <label>
                <input type="checkbox" name="rpg"/> RPG
            </label>

            <label>
                <input type="checkbox" name="simulation"/> Simulation
            </label>

            <label>
                <input type="checkbox" name="earlyaccess"/> Early Access
            </label>

            <label>
                <input type="checkbox" name="freetoplay"/> Free to play
            </label>

            <label>
                <input type="checkbox" name="sports"/> Sports
            </label>

            <label>
                <input type="checkbox" name="racing"/> Racing
            </label>

            <label>
                <input type="checkbox" name="massivelymultiplayer"/> Massively Multiplayer
            </label>
        </div>
    </div>

    <div class="category-container">
            <div class="price">
                <h2> Price</h2>
                <label>
                    <input type="checkbox" name="free"/> Free
                </label>
        
                <label>
                    <input type="checkbox" name="low-price"/> $
                </label>
        
                <label>
                    <input type="checkbox" name="medium-price"/> $$
                </label>
        
                <label>
                    <input type="checkbox" name="high-price"/> $$$
                </label>
            </div>
        </div>

        <div class="category-container">
            <div class="rating">
                <h2> Rating</h2>
                <div class="rating-star">
                    <label>
                        <input type="checkbox" name="one-star"/> ★
                    </label>

                    <label>
                        <input type="checkbox" name="two-star"/> ★★
                    </label>

                    <label>
                        <input type="checkbox" name="three-star"/> ★★★
                    </label>

                    <label>
                        <input type="checkbox" name="four-star"/> ★★★★
                    </label>

                    <label>
                        <input type="checkbox" name="five-star"/> ★★★★★
                    </label>
            </div>
        </div>
    </div>

        <div class="category-container">
            <div class="platform">
                <h2> Platform</h2>
                    <label>
                        <input type="checkbox" name="windows"/> Windows
                    </label>
            
                    <label>
                        <input type="checkbox" name="mac"/> Mac
                    </label>
            
                    <label>
                        <input type="checkbox" name="linux"/> Linux
                    </label>
                </div>
        </div>


        <div class="category-container">
            <div class="release-year">
                <h2> Release Year</h2>
                    <input type="text" id="year" name="year"/>
            </div>
        </div>
    </div>

    );
}
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


export function AddGame(props) {

    const [nameGame, setNameGame] = useState('');
    const [filters, setFilters] = useState({
        indie: false,
        action: false,
        adventure: false,
        casual: false,
        rpg: false,
        simulation: false,
        earlyaccess: false,
        freetoplay: false,
        sports: false,
        racing: false,
        massivelymultiplayer: false,
        windows: false,
        mac: false,
        linux: false
    });

    const [price, setPrice] = useState('');
    const [description, setDescription] = ('');

    const handleSearch = (event) => {
        let newValue = event.target.value
        setNameGame(newValue);
    }

    const handleBox = (event) => {
        let newFilters = {...filters};
        newFilters[event.target.name] = !newFilters[event.target.name];
        setFilters(newFilters);
    }

    const handlePrice = (event) => {
        let newPrice = event.target.value;
        setPrice(newPrice);
    }

    const handleDescription = (event) => {
        let newDescription = event.target.value;
        setDescription(newDescription);
    }

return (
    <div>
        <Navbar />
        <div className="adding-new-game">
            <h1 className="addGameHeader">Add a New Game</h1>
            <form>
                <div className="info-input">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleSearch} value={nameGame}/>
                </div>

                <div className="info-input-checkbox">
                    <p> Genres:</p>
                    <input type="checkbox" id="genre1" name="genre1" value="Indie"/>
                    <label for="genre1"> Indie</label>
                    <input type="checkbox" id="genre2" name="genre2" value="Action"/>
                    <label for="genre2"> Action</label>
                    <input type="checkbox" id="genre3" name="genre3" value="Adventure"/>
                    <label for="genre3"> Adventure</label>
                    <input type="checkbox" id="genre4" name="genre4" value="Casual"/>
                    <label for="genre4"> Casual</label>
                    <input type="checkbox" id="RPG" name="genre5" value="Strategy"/>
                    <label for="genre5"> Strategy</label>
                    <input type="checkbox" id="genre6" name="genre6" value="RPG"/>
                    <label for="genre6"> RPG</label>
                    <input type="checkbox" id="genre7" name="genre7" value="Simulation"/>
                    <label for="genre7"> Simulation</label>
                    <input type="checkbox" id="genre8" name="genre8" value="EarlyAccess"/>
                    <label for="genre8"> Early Access</label>
                    <input type="checkbox" id="genre9" name="genre9" value="FreeToPlay"/>
                    <label for="genre9"> Free to play</label>
                    <input type="checkbox" id="genre10" name="genre10" value="Sports"/>
                    <label for="genre10"> Sports</label>
                    <input type="checkbox" id="genre11" name="genre11" value="Racing"/>
                    <label for="genre11"> Racing</label>
                    <input type="checkbox" id="genre12" name="genre12" value="MassivelyMultiplayer"/>
                    <label for="genre12"> Massively Multiplayer</label>
                </div>

                <div className="info-input-checkbox">
                    <p> Platforms:</p>
                    <input type="checkbox" id="windows" name="windows" value="Windows"/>
                    <label for="windows"> Windows</label>
                    <input type="checkbox" id="mac" name="mac" value="Mac"/>
                    <label for="mac"> Mac</label>
                    <input type="checkbox" id="linux" name="linux" value="Linux"/>
                    <label for="linux"> Linux</label>
                </div>

                <div className="info-input">
                    <label for="price">Price:</label>
                    <input type="number" id="price" name="price" onChange={handlePrice} value={price}/>
                </div>

                <div className="info-input">
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" rows="5" onChange={handleDescription} value={description}></textarea>
                </div>

                <div className="add-game-button">
                    <button type="submit">Add Game</button>
                </div>

            </form>
        </div>
        <Footer />
    </div>
    

);
}
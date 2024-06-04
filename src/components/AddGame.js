import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as dbRef, set as firebaseSet, push as firebasePush} from 'firebase/database'; 
import { useSnackbar } from 'notistack';


export function AddGame(props) {
    const { enqueueSnackbar } = useSnackbar();
    const [nameGame, setNameGame] = useState('');
    const [genres, setGenres] = useState({
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
    });

    const [platforms, setPlatforms] = useState({
        windows: false,
        mac: false,
        linux: false
    });


    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [year, setYear] = useState(2000);
    const [imageFile, setImageFile] = useState(undefined);

    const handleSearch = (event) => {
        let newValue = event.target.value
        setNameGame(newValue);
    }

    const handleBox = (event) => {
        let newGenres = {...genres};
        newGenres[event.target.name] = !newGenres[event.target.name];
        setGenres(newGenres);
    }

    const handlePlatforms = (event) => {
        let newPlatforms = {...platforms};
        newPlatforms[event.target.name] = !newPlatforms[event.target.name];
        setPlatforms(newPlatforms);
    }

    const handleYear = (event) => {
        let newYear = parseInt(event.target.value);
        setYear(newYear);
    }

    const handlePrice = (event) => {
        let newPrice = parseInt(event.target.value);
        setPrice(newPrice);
    }

    const handleDescription = (event) => {
        let newDescription = event.target.value;
        setDescription(newDescription);
    }

    async function uploadFile(myFile, gameName) {
        const storage = getStorage();
        const fileRef = storageRef(storage, "uploadedLogos/" + gameName);
      
        try { 
          await uploadBytes(fileRef, myFile) 
          const url = await getDownloadURL(fileRef); 
          return url
        } catch (err) {
          console.log(err); 
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (props.currentUser === null) {
            enqueueSnackbar("Please log in to add a game!", { variant: 'error' });
            return;
        }

        if (!nameGame) {
            enqueueSnackbar("Please fill out the name of the game.", { variant: 'error' });
            return;
        } else if (!year) {
            enqueueSnackbar("Please fill out the release year of the game.", { variant: 'error' });
            return;
        } else if (!price) {
            enqueueSnackbar("Please fill out the price of the game.", { variant: 'error' });
            return;
        } else if (!description) {
            enqueueSnackbar("Please fill out the description of the game.", { variant: 'error' });
            return;
        }
        const genreList = Object.keys(genres).filter((genre) => genres[genre]);
        if (genreList.length === 0) {
            enqueueSnackbar("Please pick at least one genre for the game.", { variant: 'error' });
            return;
        }
        const platformList = Object.keys(platforms).filter((platform) => platforms[platform]);
        if (platformList.length === 0) {
            enqueueSnackbar('Please pick at least one platform for the game.', { variant: 'error' });
            return;
        }
        if (imageFile === undefined) {
            enqueueSnackbar('Please upload an image.', { variant: 'error' });
            return;
        }
        const logoUrl = await uploadFile(imageFile, nameGame)    

        const newGameObj = {
            "QueryName": nameGame,
            "ReleaseDate": year,
            "Metacritic": 5,
            "PriceFinal": price,
            "logo": logoUrl,
            "DetailedDescrip": description,
            "postedBy": props.currentUser.userId
        };

        let genreUppercase = ["Indie", "Action", "Adventure", "Casual", "RPG", "Simulation",
        "EarlyAccess", "FreeToPlay", "Sports", "Racing", "MassivelyMultiplayer"]
        genreUppercase.map((genre) => {
            newGameObj["GenreIs"+genre] = genres[genre.toLowerCase()];
        });

        const platformsUppercase = ["Windows", "Mac", "Linux"]
        platformsUppercase.map((platform) => {
            newGameObj["Platform"+platform] = platforms[platform.toLowerCase()];
        });
        

        const db = getDatabase();
        const allGamesRef = dbRef(db, "allGames");
        firebasePush(allGamesRef, newGameObj);
        enqueueSnackbar('Game added successfully!', { variant: 'success' });
    }


    const handleImageChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const newImage = event.target.files[0];
            setImageFile(newImage);
        }
    };



return (
    <div>
        <Navbar currentUser={props.currentUser}/>
        <div className="adding-new-game">
            <h1 className="addGameHeader">Add a New Game</h1>
            <form onSubmit={handleSubmit}>
                <div className="info-input">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleSearch} value={nameGame}/>
                </div>

                <div className="info-input-checkbox">
                    <p> Genres:</p>
                    <input type="checkbox" id="genre1" name="indie" checked={genres.indie} onChange={handleBox}/>
                    <label for="genre1"> Indie</label>
                    <input type="checkbox" id="genre2" name="action" checked={genres.action} onChange={handleBox}/>
                    <label for="genre2"> Action</label>
                    <input type="checkbox" id="genre3" name="adventure" checked={genres.adventure} onChange={handleBox}/>
                    <label for="genre3"> Adventure</label>
                    <input type="checkbox" id="genre4" name="casual" checked={genres.casual} onChange={handleBox}/>
                    <label for="genre4"> Casual</label>
                    <input type="checkbox" id="RPG" name="strategy" checked={genres.strategy} onChange={handleBox}/>
                    <label for="genre5"> Strategy</label>
                    <input type="checkbox" id="genre6" name="rpg" checked={genres.rpg} onChange={handleBox}/>
                    <label for="genre6"> RPG</label>
                    <input type="checkbox" id="genre7" name="simulation" checked={genres.simulation} onChange={handleBox}/>
                    <label for="genre7"> Simulation</label>
                    <input type="checkbox" id="genre8" name="earlyaccess" checked={genres.earlyaccess} onChange={handleBox}/>
                    <label for="genre8"> Early Access</label>
                    <input type="checkbox" id="genre9" name="freetoplay" checked={genres.freetoplay} onChange={handleBox}/>
                    <label for="genre9"> Free to play</label>
                    <input type="checkbox" id="genre10" name="sports" checked={genres.sports} onChange={handleBox}/>
                    <label for="genre10"> Sports</label>
                    <input type="checkbox" id="genre11" name="racing" checked={genres.racing} onChange={handleBox}/>
                    <label for="genre11"> Racing</label>
                    <input type="checkbox" id="genre12" name="massivelymultiplayer" checked={genres.massivelymultiplayer} onChange={handleBox}/>
                    <label for="genre12"> Massively Multiplayer</label>
                </div>

                <div className="info-input-checkbox">
                    <p> Platforms:</p>
                    <input type="checkbox" id="windows" name="windows" checked={platforms.windows} onChange={handlePlatforms}/>
                    <label for="windows"> Windows</label>
                    <input type="checkbox" id="mac" name="mac" checked={platforms.mac} onChange={handlePlatforms}/>
                    <label for="mac"> Mac</label>
                    <input type="checkbox" id="linux" name="linux" checked={platforms.linux} onChange={handlePlatforms}/>
                    <label for="linux"> Linux</label>
                </div>

                <div className="info-input">
                    <label for="year">Release Year:</label>
                    <input type="number" id="year" name="year" onChange={handleYear} value={year}/>
                </div>

                <div className="info-input">
                    <label for="price">Price:</label>
                    <input type="number" id="price" name="price" onChange={handlePrice} value={price}/>
                </div>

                <div className="info-input">
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" rows="5" onChange={handleDescription} value={description}></textarea>
                </div>

                <div className="info-input">
                    <label for="uploadImage">Upload Image:</label>
                    <input type="file" accept="image/png, image/jpeg, image/jpg" id="uploadImage" name="uploadImage" onChange={handleImageChange} />
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
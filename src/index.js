import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import GAME_DATA from './data/game_data.json';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVqgpJwkN3bxSevLmDu90oVkNCA0PoB3w",
  authDomain: "game-finder-16806.firebaseapp.com",
  projectId: "game-finder-16806",
  storageBucket: "game-finder-16806.appspot.com",
  messagingSenderId: "258497778171",
  appId: "1:258497778171:web:2d1c0340c1bada621cfb5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <App games={GAME_DATA.slice(200, 300)} />
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App games={GAME_DATA.slice(200, 300)} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


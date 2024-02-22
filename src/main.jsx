import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwkMOo9uF9AagbCnPi_MYpg_mOWDGN8wc",
  authDomain: "tecno-3b32c.firebaseapp.com",
  projectId: "tecno-3b32c",
  storageBucket: "tecno-3b32c.appspot.com",
  messagingSenderId: "160681465094",
  appId: "1:160681465094:web:99e8ba85f0b6e182c5fa87"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

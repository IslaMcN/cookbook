import React from 'react';
import './App.css';
import * as firebase from 'firebase/app';
import axios from 'axios';
import RecipeCard from './components/recipeCard.js'

const config = {
  apiKey: "AIzaSyAfKlgG_0A5jypoCv0HudfdqEcHUmDeeiM",
  authDomain: "cookbook-ba943.firebaseapp.com",
  databaseURL: "https://cookbook-ba943.firebaseio.com",
  projectId: "cookbook-ba943",
  storageBucket: "cookbook-ba943.appspot.com",
  messagingSenderId: "1044542193011",
  appId: "1:1044542193011:web:4e2e3f826b390f75181906",
  measurementId: "G-4FCYEWKW95"
};
function App () {
  
  document.addEventListener("DOMContentLoaded", function() {
    // // 
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    //
    // // 
    console.log("here")
     const app = firebase
     console.log("app",app)
     app.initializeApp(config, "cookbook");
    // var db = firebase.firestore();
      let features = ["auth", "database", "messaging", "storage"].filter(
        feature => typeof app[feature] === "function"
      );
      document.getElementById(
        "load"
      )
    } 
  );
  return (
    <div >
   
    <header>
      <h1>McFields Family Cookbook</h1>
    </header>
    
    </div>
  );
}

export default App;

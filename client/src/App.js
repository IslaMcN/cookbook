import React from 'react';
import './App.css';
import firebase from 'firebase'


function App() {
 
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

     const app = firebase.app();
      let features = ["auth", "database", "messaging", "storage"].filter(
        feature => typeof app[feature] === "function"
      );
      document.getElementById(
        "load"
      ).innerHTML = `Firebase SDK loaded with ${features.join(", ")}`
    } 
  );
  return (
    <div>
   
    <header>
      <h1>McFields Family Cookbook</h1>
    </header>
    
    </div>
  );
}

export default App;

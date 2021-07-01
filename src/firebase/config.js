import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyC8rOFjcbZyEuAYVJk0EAPQafHv0lZof5w",
    authDomain: "exp-trackerfb.firebaseapp.com",
    projectId: "exp-trackerfb",
    storageBucket: "exp-trackerfb.appspot.com",
    messagingSenderId: "1045064918846",
    appId: "1:1045064918846:web:59b139f48eaa69f98bee6f"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase;
import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCBe9-Lg9HMpwaraDyMLZVKgHWH3UqJc_Y",
    authDomain: "ikp-blog.firebaseapp.com",
    databaseURL: "https://ikp-blog.firebaseio.com",
    projectId: "ikp-blog",
    storageBucket: "",
    messagingSenderId: "5441272857",
    appId: "1:5441272857:web:68ee4e89dd3b6993"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const dbRef = firebase.database().ref()
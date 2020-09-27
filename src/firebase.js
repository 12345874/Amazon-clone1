import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe9i_Zw8iPHWJLyGXC32nnQva7HlZMnFA",
  authDomain: "clone1-dfec6.firebaseapp.com",
  databaseURL: "https://clone1-dfec6.firebaseio.com",
  projectId: "clone1-dfec6",
  storageBucket: "clone1-dfec6.appspot.com",
  messagingSenderId: "100356039287",
  appId: "1:100356039287:web:25882e20c1b498a7691c72",
  measurementId: "G-S6SY47VJQN",
};

//initialize the app with firebase config

const firebaseApp = firebase.initializeApp(firebaseConfig);

//initalize the database
//firestore is a real time database in firebase

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

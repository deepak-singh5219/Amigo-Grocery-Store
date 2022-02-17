import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHF3rpljf1hbhcIRLA8-6iPS2GhqoUUr4",
  authDomain: "grocistore-6f07a.firebaseapp.com",
  projectId: "grocistore-6f07a",
  storageBucket: "grocistore-6f07a.appspot.com",
  messagingSenderId: "877076551036",
  appId: "1:877076551036:web:03872985195f40554b80f9",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();

// no analitycs

// go authentication
// enable google
// valid email
// web sdk configuration
// change .env

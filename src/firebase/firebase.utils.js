import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCjeab_WCxAvN3iGnJJkgt3e8e5aKO-Z44",
  authDomain: "crwn-clothing-cb107.firebaseapp.com",
  projectId: "crwn-clothing-cb107",
  storageBucket: "crwn-clothing-cb107.appspot.com",
  messagingSenderId: "37187885130",
  appId: "1:37187885130:web:6c96b8a5e12e8b19fc2eb3",
  measurementId: "G-Y6GLMRZ00T",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

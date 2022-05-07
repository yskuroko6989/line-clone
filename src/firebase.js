import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCC0-hvmNM_QoNZ6pjKpJrJ6vG9lKxJyvw",
  authDomain: "line-clone-cc597.firebaseapp.com",
  projectId: "line-clone-cc597",
  storageBucket: "line-clone-cc597.appspot.com",
  messagingSenderId: "396367809252",
  appId: "1:396367809252:web:7aaca3b22c94a826b77af1"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEsLtxH2NORrJZaW9sP5HRq1RwBUaeu40",
  authDomain: "instagram-clone-react-14ed9.firebaseapp.com",
  projectId: "instagram-clone-react-14ed9",
  storageBucket: "instagram-clone-react-14ed9.appspot.com",
  messagingSenderId: "532771977711",
  appId: "1:532771977711:web:1108b62f92999b3a4d5e1a",
  measurementId: "G-B1YMQMTJ46",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

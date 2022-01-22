import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBbS67Z2p6oRZuKearb_fpQPDwBezJPGic",
//   authDomain: "disney-plus-clone-b4f4e.firebaseapp.com",
//   projectId: "disney-plus-clone-b4f4e",
//   storageBucket: "disney-plus-clone-b4f4e.appspot.com",
//   messagingSenderId: "681090204409",
//   appId: "1:681090204409:web:e0c1402086bcf75a155828",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore(firebaseApp);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();

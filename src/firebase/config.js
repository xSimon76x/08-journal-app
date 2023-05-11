// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const {
  VITE_apiKey,
  VITE_authDomain,
  VITE_projectId,
  VITE_storageBucket,
  VITE_messagingSenderId,
  VITE_appId,
} = getEnvironments();

// Your web app's Firebase configuration
// Dev/Production
// const firebaseConfig = {
//   apiKey: "AIzaSyB2foN0V4Zrr0rIkDRRYdLAK4EeQtfilEY",
//   authDomain: "react-curso-udemy-a3285.firebaseapp.com",
//   projectId: "react-curso-udemy-a3285",
//   storageBucket: "react-curso-udemy-a3285.appspot.com",
//   messagingSenderId: "456055095193",
//   appId: "1:456055095193:web:1a78978d2959c128e99d08"
// };

// Your web app's Firebase configuration
// Test
const firebaseConfig = {
  apiKey: VITE_apiKey,
  authDomain: VITE_authDomain,
  projectId: VITE_projectId,
  storageBucket: VITE_storageBucket,
  messagingSenderId: VITE_messagingSenderId,
  appId: VITE_appId
};



// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);

export const FireBaseAuth = getAuth( FireBaseApp );

export const FireBaseDB = getFirestore( FireBaseApp );
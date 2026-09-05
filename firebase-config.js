// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp13WAUY2vOZmsY_KE8EdOp4Ky2vSlXvY",
  authDomain: "expns-97434.firebaseapp.com",
  projectId: "expns-97434",
  storageBucket: "expns-97434.firebasestorage.app",
  messagingSenderId: "353216098942",
  appId: "1:353216098942:web:d612220a87917924c01e2f",
  measurementId: "G-1RZR6S8R6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

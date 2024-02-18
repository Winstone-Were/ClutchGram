
import firebase from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhKNy9C6l_eyaCAZf1xsN7Wt5Ed8IUzWE",
  authDomain: "androidfirebase-63c76.firebaseapp.com",
  projectId: "androidfirebase-63c76",
  storageBucket: "androidfirebase-63c76.appspot.com",
  messagingSenderId: "735688775844",
  appId: "1:735688775844:web:c5f6e25cb63a6f768a2e31",
  measurementId: "G-2K4Z2N85NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app; 
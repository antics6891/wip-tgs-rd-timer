// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxEqazuwUjrf0N3ZYuX5EjSvx8WLehC88",
  authDomain: "rd-timer.firebaseapp.com",
  databaseURL: "https://rd-timer.firebaseio.com",
  projectId: "rd-timer",
  storageBucket: "rd-timer.appspot.com",
  messagingSenderId: "1036590001924",
  appId: "1:1036590001924:web:03ed7f6a51074a74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

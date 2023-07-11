import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyASFQYqsYdynou71AywJ-Tzc0TH0yBqhYo",
  authDomain: "expo-proyect.firebaseapp.com",
  projectId: "expo-proyect",
  storageBucket: "expo-proyect.appspot.com",
  messagingSenderId: "872260238894",
  appId: "1:872260238894:web:28bc78205fd343990c29bf",
  measurementId: "G-M35MP2PCE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

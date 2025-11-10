// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBHouQS2Zlz2mhhmlhdhMwTj9-EZo9n_Ek",
  authDomain: "rmw3-ticketing-machine.firebaseapp.com",
  projectId: "rmw3-ticketing-machine",
  storageBucket: "rmw3-ticketing-machine.firebasestorage.app",
  messagingSenderId: "808211490699",
  appId: "1:808211490699:web:19abd8f644f4aa232cb18e"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, push, get };

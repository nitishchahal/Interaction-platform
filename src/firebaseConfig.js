

// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyMcH5zBZTtdtfQGMBo-kpHMhuDbR8RKQ",
  authDomain: "jk08edits.firebaseapp.com",
  projectId: "jk08edits",
  storageBucket: "jk08edits.firebasestorage.app",
  messagingSenderId: "1010549472395",
  appId: "1:1010549472395:web:e408e16f8b17dc6f07688e",
  measurementId: "G-H2CEZ5VQ76"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
export const auth = getAuth(app);
export default app;

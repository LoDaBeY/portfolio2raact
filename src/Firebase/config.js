// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVKOX9pSxaZewPGhkGbKns2wIbnga-Pes",
  authDomain: "khaled-ghonim-trans-portfolio.firebaseapp.com",
  projectId: "khaled-ghonim-trans-portfolio",
  storageBucket: "khaled-ghonim-trans-portfolio.appspot.com",
  messagingSenderId: "741943901315",
  appId: "1:741943901315:web:5611afa95f3fdc451cefb6",
  measurementId: "G-HQSKZ4X38L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

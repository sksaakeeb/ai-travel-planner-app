// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Dps_NFLHX3xA3GwhnUzkKLD4Cvx0giw",
  authDomain: "ai-travel-planner-app-0.firebaseapp.com",
  projectId: "ai-travel-planner-app-0",
  storageBucket: "ai-travel-planner-app-0.appspot.com",
  messagingSenderId: "971786852266",
  appId: "1:971786852266:web:2ec414b91767f0b8f13dd3",
  measurementId: "G-T5L8QBM76C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
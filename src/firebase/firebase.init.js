// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCymWRvAaohfkRwKlcJs9VqZ6szOyElnPs",
  authDomain: "smart-deals-a4c16.firebaseapp.com",
  projectId: "smart-deals-a4c16",
  storageBucket: "smart-deals-a4c16.firebasestorage.app",
  messagingSenderId: "1086575058234",
  appId: "1:1086575058234:web:8f971ffcfb86b3b465c403"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
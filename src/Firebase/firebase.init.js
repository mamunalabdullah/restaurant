// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8GFncUloYKV4B5cavVKPjIDnVQCKvcV4",
  authDomain: "restaurant-9e730.firebaseapp.com",
  projectId: "restaurant-9e730",
  storageBucket: "restaurant-9e730.appspot.com",
  messagingSenderId: "740478367479",
  appId: "1:740478367479:web:31e5e2bd3274b2016945f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
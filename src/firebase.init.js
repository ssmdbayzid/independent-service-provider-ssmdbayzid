// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlMbzqq3PSlDkfUzIy4vlbMgGFr0LK5Do",
  authDomain: "destinee-photography.firebaseapp.com",
  projectId: "destinee-photography",
  storageBucket: "destinee-photography.appspot.com",
  messagingSenderId: "617647687744",
  appId: "1:617647687744:web:d74c70c735e5cd35e337a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;
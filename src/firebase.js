// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0EDCS99TmdZ9pI9sS5OtCIvV7jWvv0fI",
  authDomain: "ecommerce-thinsil.firebaseapp.com",
  projectId: "ecommerce-thinsil",
  storageBucket: "ecommerce-thinsil.appspot.com",
  messagingSenderId: "883674580417",
  appId: "1:883674580417:web:6f5092862e7c8660b4db40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };

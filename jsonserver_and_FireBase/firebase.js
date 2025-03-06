// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjIy4dXL6FidDCHnbnoEdpVYzXhmsFdYc",
    authDomain: "dhruvcode-dbfa7.firebaseapp.com",
    projectId: "dhruvcode-dbfa7",
    storageBucket: "dhruvcode-dbfa7.firebasestorage.app",
    messagingSenderId: "661522757079",
    appId: "1:661522757079:web:d9f239225b716546e84792",
    measurementId: "G-5L5MCCZ2TD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
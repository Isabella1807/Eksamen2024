//Npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC86CO6SSjqIsQWBal7saC-hV_pAvQEY3M",
    authDomain: "mortenschokolade.firebaseapp.com",
    projectId: "mortenschokolade",
    /*storageBucket: "mortenschokolade.appspot.com",*/
    messagingSenderId: "427824695239",
    appId: "1:427824695239:web:603ac1fec0ad477fa13be2",
    measurementId: "G-18H1B9W5C1",
    storageBucket: "gs://mortenschokolade.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const myDB = getFirestore(app);


export default myDB;


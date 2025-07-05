// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase-admin/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcOG_XRDq92mU9Fx4hkxVC8ByRPbRDQ9w",
  authDomain: "interviewprep-b4400.firebaseapp.com",
  projectId: "interviewprep-b4400",
  storageBucket: "interviewprep-b4400.firebasestorage.app",
  messagingSenderId: "1016969364086",
  appId: "1:1016969364086:web:0a2fed2a70410760499557",
  measurementId: "G-8YP0EY8HH1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
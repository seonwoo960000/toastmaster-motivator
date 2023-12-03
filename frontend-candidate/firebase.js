// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCitLF4MAuFyytq_jMIGy-sLGqKFfHQraI",
  authDomain: "toastmasters-5035b.firebaseapp.com",
  projectId: "toastmasters-5035b",
  storageBucket: "toastmasters-5035b.appspot.com",
  messagingSenderId: "216820627752",
  appId: "1:216820627752:web:9fe56418e19aa565be781d",
  measurementId: "G-EH05PZ7CP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
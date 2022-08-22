// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6e-Kfh8TovY7KTA-LWYouqVLr5Xc-iNA",
  authDomain: "auth-react-85100.firebaseapp.com",
  projectId: "auth-react-85100",
  storageBucket: "auth-react-85100.appspot.com",
  messagingSenderId: "25698012640",
  appId: "1:25698012640:web:f360929da3ee1bada76f85",
  measurementId: "G-2GKZ6ZB0EC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();

export { app, auth};
import firebase from "firebase";


const firebaseConfig ={
    apiKey: "AIzaSyBINWji1LHnxR4F3cO9CYKGgjM7n-o8Tj0",
    authDomain: "customcomponent-600b7.firebaseapp.com",
    projectId: "customcomponent-600b7",
    storageBucket: "customcomponent-600b7.appspot.com",
    messagingSenderId: "65143696475",
    appId: "1:65143696475:web:8580880c3b12e9426ea37e",
    measurementId: "G-KCPZKQ56Z9"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
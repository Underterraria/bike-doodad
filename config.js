import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDaltm1aeRKX9eC4ipLBjcAQZyM038oI3c",
    authDomain: "bike-thing-fa1da.firebaseapp.com",
    projectId: "bike-thing-fa1da",
    storageBucket: "bike-thing-fa1da.appspot.com",
    messagingSenderId: "1001806473434",
    appId: "1:1001806473434:web:3fa8f9ccf17d2649be5de3"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

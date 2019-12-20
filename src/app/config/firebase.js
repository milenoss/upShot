import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCFqL_k1vG3Gn4LWEB5X83yR-tq6D096qw",
    authDomain: "upshot-262314.firebaseapp.com",
    databaseURL: "https://upshot-262314.firebaseio.com",
    projectId: "upshot-262314",
    storageBucket: "upshot-262314.appspot.com",
    messagingSenderId: "730192827749",
    appId: "1:730192827749:web:276f3fd5bb841df5033d8c",
    measurementId: "G-ZDZ1NP246B"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
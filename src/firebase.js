// import firebase from 'firebase/compat/app';
//import firebase from 'firebase/app';
// import * as firebase from "firebase/compat/app"
// import "firebase/firestore";
// import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBWIshdw4ness_CF812rniTj9whZhYl4yI",
    authDomain: "clone-a6c57.firebaseapp.com",
    projectId: "clone-a6c57",
    storageBucket: "clone-a6c57.appspot.com",
    messagingSenderId: "1057212831956",
    appId: "1:1057212831956:web:0f7d77e66ce893a67ec341"
  };

  // const app = initializeApp(firebaseConfig);
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {db, auth, provider};




//   const app = firebase.initializeApp(firebaseConfig);
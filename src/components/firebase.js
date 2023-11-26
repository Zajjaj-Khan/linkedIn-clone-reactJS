import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCdDapRJd1acmtyzKq_B8zww71y8ictw_w",
    authDomain: "linkedin-clone-92f75.firebaseapp.com",
    projectId: "linkedin-clone-92f75",
    storageBucket: "linkedin-clone-92f75.appspot.com",
    messagingSenderId: "636074563074",
    appId: "1:636074563074:web:e83f55b1afdab601ab791b",
    measurementId: "G-XLL0LM660T"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  
  export {db,auth};

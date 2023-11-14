
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCdDapRJd1acmtyzKq_B8zww71y8ictw_w",
    authDomain: "linkedin-clone-92f75.firebaseapp.com",
    projectId: "linkedin-clone-92f75",
    storageBucket: "linkedin-clone-92f75.appspot.com",
    messagingSenderId: "636074563074",
    appId: "1:636074563074:web:e83f55b1afdab601ab791b",
    measurementId: "G-XLL0LM660T"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  
  export {db,auth};

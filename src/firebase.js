import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyC6eR9zOM98axcJ2EX8OUk55twBd1R7BG0",
  authDomain: "resume-builder2.firebaseapp.com",
  projectId: "resume-builder2",
  storageBucket: "resume-builder2.appspot.com",
  messagingSenderId: "975206432851",
  appId: "1:975206432851:web:256fccfbc0da9cc96b46a6"
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
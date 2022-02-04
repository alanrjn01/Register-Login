import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged, signOut} from 'firebase/auth'; 
//importo el sdk de firebase y luego getauth y createuser de firebase/auth

//los datos del sdk estan en un archivo de variables locales
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

//inicializo getauth pasandole por parámetros la constante app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//exporto auth y el metodo de crear usuarios para usarlo globalmente
export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut};
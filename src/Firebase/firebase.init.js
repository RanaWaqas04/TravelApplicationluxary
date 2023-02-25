import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config.js";

// const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

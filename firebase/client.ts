
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCab_UFrIGrr1wzAasFKVYxdbpIl13jUAk",
    authDomain: "prepwise-98a55.firebaseapp.com",
    projectId: "prepwise-98a55",
    storageBucket: "prepwise-98a55.firebasestorage.app",
    messagingSenderId: "910591653190",
    appId: "1:910591653190:web:bb612ea2128c614614e147",
    measurementId: "G-76R2SS39VG"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
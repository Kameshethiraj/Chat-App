// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEFRW0zPe6IMUlx4lno05k7PATFydqB6U",
  authDomain: "kams-chatapp.firebaseapp.com",
  projectId: "kams-chatapp",
  storageBucket: "kams-chatapp.appspot.com",
  messagingSenderId: "292101540973",
  appId: "1:292101540973:web:6b0e883fad0688e6190364",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

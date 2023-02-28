// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTo75GYJX-Z1rM4b9uXZtXfAIDB7MUnBM",
  authDomain: "fittire-estore.firebaseapp.com",
  projectId: "fittire-estore",
  storageBucket: "fittire-estore.appspot.com",
  messagingSenderId: "341173586647",
  appId: "1:341173586647:web:689668a2f509076b0bfe92",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider)

// ! Database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid); //! userDocRef takes three arguments Database,Collection,Unique Identifier
  // console.log(userDocRef)
  // ? If the collection does not exist Google will generate it

  const userSnapshot = await getDoc(userDocRef);
  //  console.log(userSnapshot());
  //  console.log(userSnapshot.exists()); //* This check if the data exixts in the database or not privdes value of true or false

  // ? If user data exists
  //! Do nothing
  //? If user data does not exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// * Sign Out Function

export const signOutUser = async () => await signOut(auth);

import { GoogleAuthProvider, getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLVOlwlBi6iegEVZjl9b_3LTjfJnZCNcc",
  authDomain: "budget-app-527e9.firebaseapp.com",
  projectId: "budget-app-527e9",
  storageBucket: "budget-app-527e9.appspot.com",
  messagingSenderId: "945739688826",
  appId: "1:945739688826:web:0b1e24b6abbbf9dc8144c3",
  measurementId: "G-VMCFKPTWC6",
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore();

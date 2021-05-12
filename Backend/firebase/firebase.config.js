import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-Mj2fPN4lz6mIaLTEHw7Bh4KcNZ7xhBQ",
  authDomain: "bander-270a4.firebaseapp.com",
  projectId: "bander-270a4",
  storageBucket: "bander-270a4.appspot.com",
  messagingSenderId: "733783209000",
  appId: "1:733783209000:web:903f726b26eeebf87ff11d",
  measurementId: "G-TK7MYMYEV7",
};

firebase.initializeApp(firebaseConfig);
const fireDB = firebase.firestore();

export async function signInEmail(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signInGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

export function signOut() {
  firebase.auth().signOut();
}

export default fireDB;

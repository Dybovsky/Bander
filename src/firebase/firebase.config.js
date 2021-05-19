import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-Mj2fPN4lz6mIaLTEHw7Bh4KcNZ7xhBQ",
  authDomain: "bander-270a4.firebaseapp.com",
  projectId: "bander-270a4",
  storageBucket: "bander-270a4.appspot.com",
  messagingSenderId: "733783209000",
  appId: "1:733783209000:web:903f726b26eeebf87ff11d",
  measurementId: "G-TK7MYMYEV7",
};

const fireInit = firebase.initializeApp(firebaseConfig);


export default fireInit;

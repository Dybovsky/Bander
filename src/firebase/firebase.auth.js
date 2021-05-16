import axios from "axios";
import firebase from "firebase";
const baseURL = "http://localhost:5050";
const db = firebase.firestore();
const fireAuth = firebase.auth();

export async function signInEmail(email, password) {
  const user = await fireAuth.signInWithEmailAndPassword(email, password);
  const userSignin = db.collection("users").get(user.user.uid);
  fireAuth.signOut();
  console.log(userSignin);
  return user.user;
}

export async function signInGoogle(e) {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  const userInfo = await fireAuth.signInWithPopup(provider);
  const idToken = (await userInfo.user.getIdToken()).toString();
  const verify = await axios.post(baseURL + "/users/sessionLogin", { idToken });
  fireAuth.signOut();
  console.log(verify.data);
}

export async function SignUp(payload) {
  console.log(payload)
  const createUser = await axios.post(baseURL +"/users/createUser", payload)
  console.log(createUser.data);
}


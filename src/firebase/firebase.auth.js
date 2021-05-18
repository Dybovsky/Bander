import axios from "axios";
import firebase from "firebase";
const baseURL = "http://localhost:5050";
const db = firebase.firestore()

export async function signInEmail(email, password) {
  const user = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  firebase.auth().signOut();
  const userSignin = db.collection("users").get(user.user.uid)
  return user.user;
}

export async function signInGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const userInfo = await firebase.auth().signInWithPopup(provider);
  const idToken = (await userInfo.user.getIdToken()).toString();
  const verify = await axios.post(baseURL + "/users/sessionLogin", { idToken });
  firebase.auth().signOut();
  console.log(verify.data);
  return { userInfo, idToken };
}

export async function SignUp(payload) {
  console.log(payload);
  const createUser = await firebase
    .auth()
    .createUserWithEmailAndPassword(payload.email, payload.password);
  console.log(createUser);
}

import axios from "axios";
import firebase from "firebase";
const baseURL = "http://localhost:5050";

export async function signInEmail(email, password) {
  const userAuth = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  console.log(userAuth.user.getIdToken());
  firebase.auth().signOut();
}

export async function signInGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const userInfo = await firebase.auth().signInWithPopup(provider);
  const idToken = (await userInfo.user.getIdToken()).toString();
  const verify = await axios.post(baseURL + "/users/sessionLogin", { idToken });
  firebase.auth().signOut();
  console.log(verify.data)
  return { userInfo, idToken };
}

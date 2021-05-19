import axios from "axios";
import firebase from "firebase";

const baseURL = "http://localhost:5050";
const fireAuth = firebase.auth();

export async function signInEmail(email, password) {
  const userInfo = (await fireAuth.signInWithEmailAndPassword(email, password))
    .user;
  const token = (await userInfo.getIdToken()).toString();
  const verify = await axios.post(baseURL + "/users/sessionLogin", { token });
  fireAuth.signOut();
  const returnObj = { curUser: verify.data, token };
  console.log(returnObj);
  return returnObj;
}

export async function signInGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const userInfo = await fireAuth.signInWithPopup(provider);
  const token = await userInfo.user.getIdToken();
  const verify = await axios.post(baseURL + "/users/sessionLogin", { token });
  fireAuth.signOut();
  const returnObj = { curUser: verify.data, token };
  return returnObj;
}

export async function SignUp(payload) {
  const createUser = await axios.post(baseURL + "/users/createUser", payload);
  const curUser = createUser.data.newUser;
  const verToken = await firebase
    .auth()
    .signInWithCustomToken(createUser.data.token);
  const token = await verToken.user.getIdToken();
  const returnObj = { curUser, token };
  return returnObj;
}

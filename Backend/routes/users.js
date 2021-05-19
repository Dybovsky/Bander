var express = require("express");
var router = express.Router();
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
const { userCreationValidators } = require('../validation');
const {validationResult } = require('express-validator')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

router.post("/createUser", async (req, res) => {
  const { newUser, artist, venue } = req.body;
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  console.log(req.body)
  const createToken = {
    email: newUser.email,
    password: newUser.pwd,
    displayName: `${newUser.fName} ${newUser.lName}`,
    photoURL: "http://www.example.com/12345678/photo.png",
  };
  try {
    const createUser = await admin.auth().createUser(createToken);
    delete newUser.pwd;
    delete newUser.conPwd;
    newUser.photoURL = createUser.photoURL;
    newUser.uid = createUser.uid;
    if (createUser) {
      admin.firestore().collection("users").doc(createUser.uid).set(newUser);
      admin.firestore().collection("artist").doc(createUser.uid).set(artist);
      admin.firestore().collection("venues").doc(createUser.uid).set(venue);
    }
  } catch (err) {
    res.send(err);
  }
  const token = await admin.auth().createCustomToken(newUser.uid);
  res.send({ token, newUser });
});

router.post("/sessionLogin", async (req, res) => {
  const idToken = req.body.token;
  const verify = await admin.auth().verifyIdToken(idToken);
  const userData = await admin
    .firestore()
    .collection("users")
    .doc(verify.uid)
    .get();
  res.send(userData.data());
});

router.post("/sessionSignUp", async (req, res) => {
  // const idToken = req.body.idToken
  // const verify = await admin.auth().verifyIdToken(idToken)
  res.send({ msg: "Signed up successfully" });
});

router.get("/", async (req, res) => { //get users
  const user = await admin.firestore().collection("users").get()
  const users = await user.docs.map(user => user.data())
  res.send(users);
});

router.post("/",userCreationValidators, async (req, res) => { //add user
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  const newUser = req.body;
  await admin.firestore().collection("users").add(newUser) 
  res.send({msg: "User added successfully"});
});

module.exports = router;
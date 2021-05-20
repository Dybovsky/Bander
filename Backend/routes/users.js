var express = require("express");
var router = express.Router();
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const demosBucket = admin.storage().bucket("bander-270a4.appspot.com");
const profilePicsBucket = admin
  .storage()
  .bucket("bander-270a4.appspot.com/ProfilePics");

router.post("/createUser", async (req, res) => {
  const { newUser, artist, venue } = req.body;
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

router.post("/getInfo", async (req, res) => {
  const { id } = req.body;
  try {
    const getUserInfo = (
      await admin.firestore().collection("users").doc(id).get()
    ).data();
    res.send(getUserInfo);
  } catch (err) {
    res.send(err);
    return;
  }
});

router.post("/getArtist", async (req, res) => {
  const { id } = req.body;
  try {
    const getArtInfo = (
      await admin.firestore().collection("artist").doc(id).get()
    ).data();
    res.send(getArtInfo);
  } catch (err) {
    res.send(err);
    return;
  }
});

router.post("/getVenue", async (req, res) => {
  const { id } = req.body;
  try {
    const getVenueInfo = (
      await admin.firestore().collection("venues").doc(id).get()
    ).data();
    res.send(getVenueInfo);
  } catch (err) {
    res.send(err);
    return;
  }
});

router.post("/updateInfo", async (req, res) => {
  const { id } = req.body;
  try {
    await admin.firestore().collection("users").doc(id).update(curUser);
  } catch (err) {
    res.send(err);
    return;
  }
  res.send("Updated successfully");
});

router.post("/demos", async (req, res) => {
  const { id } = req.body;
  try {
    
  } catch (err) {
    res.send(err);
    return;
  }
});

module.exports = router;

var express = require("express");
var router = express.Router();
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

router.post("/createUser", async (req, res) => {
  const payload = req.body;
  const { newUser, artist, venue } = payload;
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
    console.log(err);
    res.send(err)
  }
  const token = admin.auth().createCustomToken()
  res.send("henlo");
});

/* post login users. */
router.post("/sessionLogin", async (req, res) => {
  const idToken = req.body.idToken;
  const verify = await admin.auth().verifyIdToken(idToken);
  const userData = await admin
    .firestore()
    .collection("users")
    .doc(verify.uid)
    .get();
  console.log(userData);
  res.send({ verify });
});

module.exports = router;

router.post("/sessionSignUp", async (req, res) => {
  // const idToken = req.body.idToken
  // const verify = await admin.auth().verifyIdToken(idToken)
  res.send({ msg: "Signed up successfully" });
});

module.exports = router;

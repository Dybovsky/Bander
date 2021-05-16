var express = require("express");
var router = express.Router();
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

router.post("/createUser", async (req, res) => {
  const payload = req.body;
  const venue = payload.venue;
  const artist = payload.artinfo;
  const authUserToCreate = {
    email: payload.email,
    password: payload.pwd,
    displayName: `${payload.fName} ${payload.lName}`,
    photoURL: "http://www.example.com/12345678/photo.png",
  };
  if(!venue.nickname) console.log("hola")
  if(artist === {}) console.log("hola")
  try {
    delete payload.pwd;
    delete payload.conPwd;
    delete payload.artinfo;
    delete payload.venue;
    const createUser = await admin.auth().createUser(authUserToCreate);
    const createDBProfile = await admin
    .firestore()
    .collection("users")
    .doc(createUser.uid)
    .set(payload);
  } catch (err) {
    console.log(err);
  }
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

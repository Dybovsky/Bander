var express = require("express");
var router = express.Router();
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

/* post login users. */
router.post("/sessionLogin", async (req, res) => {
  const idToken = req.body.idToken
  const verify = await admin.auth().verifyIdToken(idToken)
  res.send({msg: "Logged in successfully", verify});
});

module.exports = router;

router.post("/sessionSignUp", async (req, res) => {
  // const idToken = req.body.idToken
  // const verify = await admin.auth().verifyIdToken(idToken)
  res.send({msg: "Signed up successfully"});
});

module.exports = router;

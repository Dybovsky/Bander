import firebase from "firebase/app";

export async function uploadCloud(avatar, userCreator, cb) {
  try {
    const cloud = firebase.storage();
    const userId = firebase.auth().currentUser.uid;
    const userFireDoc = firebase.firestore().collection("users").doc(userId);
    let photoURL = await firebase
      .storage()
      .ref("ProfilePics/")
      .child("profile_placeholder.jpeg")
      .getDownloadURL();
    userFireDoc.update({ photoURL });

    if (userCreator) {
      const storageRef = cloud.ref("ProfilePics/" + userId);
      const task = storageRef.put(avatar);

      task.on(
        "state_changed",
        function progress(snapshot) {
          const precentage = Math.ceil(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          if (cb) cb(precentage);
        },

        function error(err) {
          console.log(err); //TODO: display error incase of err while loading
        },

        async function complete() {
          await firebase
            .storage()
            .ref("ProfilePics/")
            .child(userId)
            .getDownloadURL();
        }
      );
      return await (await task).ref.getDownloadURL();
    }
  } catch (err) {
    console.log(err);
  }
}

export async function userUpdate(userObj) {
  const { curUser } = userObj;
  firebase.firestore().collection("users").doc(curUser.uid).update(curUser);
}

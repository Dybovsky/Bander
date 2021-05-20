import axios from "axios";
import firebase from "firebase/app";

const baseURL = "http://localhost:5050";

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
          const percentage = Math.ceil(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          if (cb) cb(percentage);
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

export async function getUserById(id) {
  const getUser = await axios.post(baseURL + "/users/getInfo", { id });
  return getUser.data;
}

export async function getUserArtistById(id) {
  const getArtist = await axios.post(baseURL + "/users/getArtist", { id });
  return getArtist.data;
}

export async function getVenueById(id) {
  const getVenue = await axios.post(baseURL + "/users/getVenue", { id });
  return getVenue.data;
}

export async function getDemos(id) {
  try{
    const getDemos = await firebase.storage().ref().child('/').listAll()
    console.log(getDemos)
  }catch(err){
    console.log(err)
  }
}
export async function searchAdvance(searchObj) {
  const { location, date, venType, genre } = searchObj;
  const result = await firebase.firestore().collection("events")
            .where("location", "==", location)
            .where("date", "==", date)
            .where("venType", "==", venType)
            .where("genre", "==", genre).get().limit(3);
  return result.querySnapshot;
}

export async function searchBasic(searchObj) {
  const { venType, genre } = searchObj;
  const result = await firebase.firestore().collection("events")
            .where("venType", "==", venType)
            .where("genre", "==", genre).get().limit(3);
  return result.querySnapshot;
}

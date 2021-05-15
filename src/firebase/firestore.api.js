import firebase from "firebase/app";
// import { GetUsers, GetVenues } from "../firebase/firestore.api";  
// // collections "users", "venues"
// // doc === uid 

//function to get user info
export async function  GetUsers() {  
    firebase.firestore()
        .collection("users")
        .get()
        .then(snap => {
            return snap.docs.map(user => user.data());
        }).then(users => {
            console.log(users)
        })
}

//function to get venue info and return 
export async function GetVenues() {
    firebase.firestore()
        .collection("venues")
        .get()
        .then(snap => {
            return snap.docs.map(venue => venue.data());
        }).then(venues => {
            console.log(venues)
        })
}

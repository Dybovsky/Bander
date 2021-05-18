import firebase from "firebase";
import { useRef } from "react";
// import { GetUsers, GetVenues } from "../firebase/firestore.api";  
// // collections "users", "venues"
// // doc === uid 

//function to get user info
export async function GetUsers() {
    const user = await firebase.firestore().collection("users").get()
    const users = await user.docs.map(user => user.data())
    return users;
}

//function to get venue info and return 
export async function GetVenues() {
    const venue = await firebase.firestore().collection("users").get()
    const venues = await venue.docs.map(user => user.data())
}

export async function AddUser(newUser) {
    await firebase.firestore().collection("users").add(newUser)
}
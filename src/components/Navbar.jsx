import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

import { signInGoogle, signInEmail,SignUp } from "../firebase/firebase.auth";
import fireInit from "../firebase/firebase.config"; // need it to initialize firebase so the google authenctication will work
import firebase from 'firebase/app'
import React, { useState } from "react"

const Navbar = () => {
  const auth = useAuth();

import SignUpModal from "./SignUpModal";

  return (
    <>
      <div
        className="d-flex flex-sm-nowrap pt-2 mx-auto shadow rounded align-items-center justify-content-between mt-2 fixed-top"
        style={{
          backgroundColor: "rgb(1, 3, 26)",
          height: "65px",
          width: "90%",
          position: "relative",
        }}
      >
        <Link className="btn btn-outline-light m-3" to="/profile/home">
          Home
        </Link>
        <div>
          <SignUpModal />
          {auth.token && (
            <Link className="btn btn-outline-light m-3" to="/artist_profile">
              Profile
            </Link>
          )}
          {auth.token && (
            <Link
              className="btn btn-outline-light m-3"
              to="/"
              onClick={auth.logOut}
            >
              Log Out
            </Link>
          )}
          {!auth.token && (
            <Link className="btn btn-outline-light m-3" to="/">
              Log In
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Navbar;

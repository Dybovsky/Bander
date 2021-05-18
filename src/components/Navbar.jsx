import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import fireInit from "../firebase/firebase.config"; // need it to initialize firebase so the google authentication will work
import SignInEmailModal from "./SignInEmailModal";
import { signInGoogle, SignUp } from "../firebase/firebase.auth"; // Call this when you want to send the signUp Data to the server
import SignUpModal from "./SignUpModal";
import React, { useState } from "react";

const Navbar = () => {
  const auth = useAuth();

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
          {!auth.token && <SignInEmailModal />}
          {!auth.token && (
            <Link
              onClick={signInGoogle}
              className="btn btn-outline-light m-3"
              to="/"
            >
              Sign in Google
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Navbar;

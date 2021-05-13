import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { signInGoogle, signInEmail,SignUp } from "../firebase/firebase.auth";
import fireInit from "../firebase/firebase.config"; // need it to initialize firebase so the google authenctication will work
import firebase from 'firebase/app'
import Modal_sign from './modal_sign_up'
import Modal_login from './modal_login'
import React, { useState } from "react"

const Navbar = () => {
  const auth = useAuth();
  const [showS, signUpShow] = useState(false)
  const [showL, loginShow] = useState(false)
  
  const openModal = (e) => {
    // signInEmail(email,password) insert modal here if possible that will ask for the email and password and then call this function
    console.log(e.target);
  };

  return (
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
      {auth.token && (
        <Link className="btn btn-outline-light m-3" to="/">
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
      <nav>
        {!auth.token && (
          <>
          <Link
            onClick={loginShow}
            className="btn btn-outline-light m-3"
            to="/"
          >
            Log In Mail
          </Link>
           <Modal_login show={showL} onClose={() => loginShow(false)} />
           </>
        )}
        {!auth.token && (
          <Link
            onClick={signInGoogle}
            className="btn btn-outline-light m-3"
            to="/"
          >
            Log In Google
          </Link>
        )}
        {!auth.token && (
          <>
          <Link
            onClick={() => signUpShow(true)}
            className="btn btn-outline-light m-3"
            to="/"
          >
            Sign Up
          </Link>
           <Modal_sign show={showS} onClose={() => signUpShow(false)} />
           </>
        )}
        {auth.token && (
          <Link
            onClick={()=>{
              fireInit.auth().signOut().then(() => {
                  alert("Signed out successfully")
                })}}
            className="btn btn-outline-light m-3"
            to="/"
          >
            Sign Out
          </Link>
        )}          
      </nav>
    </div>
  );
};
export default Navbar;

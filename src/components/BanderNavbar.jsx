import fireInit from "../firebase/firebase.config"; // need it to initialize firebase so the google authenctication will work
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import SignInEmailModal from "./SignInEmailModal";
import { signInGoogle } from "../firebase/firebase.auth";
import SignUpModal from "./SignUpModal";
import React from "react";
import { Button, Navbar } from "react-bootstrap";

const BanderNavbar = () => {
  const { token, logOut } = useAuth();

  return (
    <> 
      <Navbar bg="dark" expand="lg" className="justify-content-between">
        <Link component={Button} to="/profile/home" className="mx-2">Home</Link>
          <div className="mx-2">
            {token && (<Link component={Button} to="/artist_profile"> Profile </Link>)}
            {token && (<Link component={Button} to="/" onClick={logOut}>Log Out</Link>)}
            {!token && (<Link onClick={signInGoogle} component={Button} to="/">Sign in Google</Link>)}
            {!token && <SignInEmailModal />}
            {!token && <SignUpModal />}
          </div>
      </Navbar>
    </>
  );
};
export default BanderNavbar;

import fireInit from "../firebase/firebase.config"; // need it to initialize firebase so the google authentication will work
import { Link } from "react-router-dom";

import { useAuth } from "../context/auth";
import SignInEmailModal from "./SignInEmailModal";
import { signInGoogle } from "../firebase/firebase.auth";
import SignUpModal from "./SignUpModal";
import React from "react";
import { Button, Navbar } from "react-bootstrap";

const BanderNavbar = () => {
  const { token, user ,saveToken ,removeToken} = useAuth();

  const handleGoogle = async (e) => {
    e.preventDefault();
    const userData = await signInGoogle();
    saveToken(userData)
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" className="justify-content-between">
        <Link component={Button} to="/profile/home" className="mx-2">Home</Link>
          <div className="mx-2">
            {token && (<Link component={Button} to="/artist_profile"> Profile </Link>)}
            {token && <Link to="/" onClick={removeToken}>Log Out</Link>}
            <Link component={Button} to="/search" >Search Events</Link>
            {!token && (<Link onClick={signInGoogle} component={Button} to="/">Sign in Google</Link>)}
            {!token && <SignInEmailModal />}
            {!token && <SignUpModal />}
        </div>
      </Navbar>
    </>
  );
};
export default BanderNavbar;

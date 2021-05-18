import fireInit from "../firebase/firebase.config"; // need it to initialize firebase so the google authenctication will work
import React from "react";
import SignUpModal from "./SignUpModal";
import SignInEmailModal from "./SignInEmailModal";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import { signInGoogle } from "../firebase/firebase.auth";
import { Button, Navbar } from "react-bootstrap";
import { useEffect } from "react";

const BanderNavbar = () => {
  const { token, user, saveToken, removeToken } = useAuth();

  const handleGoogle = async (e) => {
    e.preventDefault();
    const userData = await signInGoogle();
    saveToken(userData);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <Navbar bg="dark" expand="lg" className="justify-content-between">
        <Link component={Button} to="/profile/home" className="mx-2">
          Home
        </Link>
        <div className="mx-2 d-flex justify-content-around gap-3">
          {token && <Link component={Button} to={`/artist_profile/${user.uid}/`}>Profile</Link>}
          {token && <Button onClick={removeToken}>Log Out</Button>}
          {!token && <Button onClick={handleGoogle}>Sign in Google</Button>}
          {!token && <SignInEmailModal />}
          {!token && <SignUpModal />}
        </div>
      </Navbar>
    </>
  );
};
export default BanderNavbar;

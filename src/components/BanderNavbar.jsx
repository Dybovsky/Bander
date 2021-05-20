import React from "react";
import SignUpModal from "./SignUpModal";
import SignInEmailModal from "./SignInEmailModal";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { signInGoogle } from "../firebase/firebase.auth";
import { Button, Navbar } from "react-bootstrap";

const BanderNavbar = () => {
  const { token, user, saveToken, removeToken } = useAuth();

  const handleGoogle = async (e) => {
    e.preventDefault();
    const userData = await signInGoogle();
    saveToken(userData);
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" className="justify-content-between">
        <Link component={Button} to="/home" className="mx-2">
          Home
        </Link>
        <div className="mx-2 d-flex justify-content-around gap-3">
          {token && <Link component={Button} to={`/addPost/`}>Create Post</Link>}
          {token && <Link component={Button} to={`/userProfile/${user.uid}/`}>Profile</Link>}
          {token && <Link component={Button} to="/search">Search</Link>}
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

import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { signInGoogle, signInEmail } from "../firebase/firebase.auth";
import fireInit from "../firebase/firebase.config"; // need it to initialize firebase so the google authenctication will work

const Navbar = () => {
  const auth = useAuth();
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
          <Link
            onClick={openModal}
            className="btn btn-outline-light m-3"
            to="/"
          >
            Log In Mail
          </Link>
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
      </nav>
    </div>
  );
};
export default Navbar;

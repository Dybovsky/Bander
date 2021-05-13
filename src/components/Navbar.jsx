import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

const Navbar = () => {
  const auth = useAuth();

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
      <nav>
        {/* {auth.token && ( */}
        <Link
          className="btn btn-outline-light m-3"
          to={auth.user.type === "artist" ? "/artist_profile" : "/bar_profile"}
        >
          Profile
        </Link>
        {/* )} */}
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
      </nav>
    </div>
  );
};
export default Navbar;

import { useState } from "react";
import { useAuth } from "../context/auth";

const ArtistProfile = () => {
  const auth = useAuth();
  const curUser = auth.user;
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    email: "",
    profession: "",
    genre: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>My Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <label className="">
          <span>First name:</span>
          <input
            value={updatedUser.firstName}
            name="firstName"
            type="text"
            onChange={updateUser}
          />
        </label>
      </form>
    </div>
  );
};

export default ArtistProfile;

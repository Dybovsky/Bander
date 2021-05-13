import { useState } from "react";
// import { useAuth } from "../context/auth";
import { Button, Form } from "react-bootstrap";
import { mocArtist } from "../mocData/mocUsers";
// mocArtist
// const curUser = {
//   image: "img",
//   firstName: "Bob",
//   lastName: "Marley",
//   nickname: "The Wailers",
//   email: "bob@marley.com",
//   type: "artist",
//   instrument: ["guitar", "vocal"],
//   genre: ["raggie", "rasta"],

// };

const artist = mocArtist;

const ArtistProfile = () => {
  //   const auth = useAuth();
  const [open, setOpen] = useState(true);
  //   const artist = auth.user;

  const [updatedUser, setUpdatedUser] = useState(artist);

  const saveChanges = (user) => {
    setOpen(!open);
    console.log("updated user", updatedUser);

    //send to db
  };

  const updateUser = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Artist profile</h1>
      <div className="back">
        <div>
          <img src={artist.image} alt="avatar" className="avatar" />
          <Form className="form">
            <Form.Control
              readOnly={open}
              plaintext={open}
              defaultValue={artist.firstName}
              onChange={updateUser}
              name="firstName"
            ></Form.Control>
            <Form.Control
              readOnly={open}
              plaintext={open}
              defaultValue={artist.lastName}
              onChange={updateUser}
              name="lastName"
            ></Form.Control>
            <Form.Control
              readOnly={open}
              plaintext={open}
              defaultValue={mocArtist.nickname}
              onChange={updateUser}
              name="nickname"
            ></Form.Control>
            <Form.Control
              readOnly={open}
              plaintext={open}
              defaultValue={artist.email}
              onChange={updateUser}
              name="email"
            ></Form.Control>
            <Form.Control
              readOnly={open}
              plaintext={open}
              defaultValue={artist.instrument}
              onChange={updateUser}
              name="instrument"
            ></Form.Control>
            <Form.Control
              readOnly={open}
              plaintext={open}
              defaultValue={artist.genre}
              onChange={updateUser}
              name="genre"
            ></Form.Control>
            {!open && (
              <Form.Control
                readOnly={open}
                plaintext={open}
                type="password"
                placeholder="Password"
                defaultValue=""
                onChange={updateUser}
                name="password"
              ></Form.Control>
            )}
            {!open && (
              <Form.Control
                readOnly={open}
                plaintext={open}
                type="password"
                placeholder="Password check"
                defaultValue=""
                onChange={updateUser}
                name="passwordCheck"
              ></Form.Control>
            )}
          </Form>
        </div>
        <div className="buttons">
          <Button onClick={() => setOpen(!open)}>Edit account</Button>
          {!open && (
            <Button onClick={() => saveChanges(updatedUser)}>Save</Button>
          )}
        </div>
      </div>
    </>
  );
};

export default ArtistProfile;

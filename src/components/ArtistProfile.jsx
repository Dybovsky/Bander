import { useState } from "react";
import { useAuth } from "../context/auth";
import { Button, Form } from "react-bootstrap";

const ArtistProfile = () => {
  const { user, artist } = useAuth();
  const [open, setOpen] = useState(false);
  const [art, setart] = useState({});
  
  const saveChanges = () => {
    setOpen(!open);
    //send to db
  };

  const updateUser = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    const copy = { ...artist };
    copy[key] = value;
    setart(copy);
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
              defaultValue={artist.nickname}
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
          {!open && <Button onClick={saveChanges}>Save</Button>}
        </div>
      </div>
    </>
  );
};

export default ArtistProfile;

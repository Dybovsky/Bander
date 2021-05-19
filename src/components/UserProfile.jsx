import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { Button, Form, Card, Collapse } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router";
import { uploadCloud, userUpdate } from "../firebase/firebase.api";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user, baseURL, saveToken, token } = useAuth();
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const [artist, setartist] = useState({});
  const [avatar, setAvatar] = useState(null);

  const saveChanges = async () => {
    const photoURL = await uploadCloud(avatar, setAvatar, false);
    const curUser = { ...user };
    curUser.photoURL = photoURL;
    userUpdate({ curUser });
    saveToken({ token, curUser });
  };

  useEffect(async () => {
    const getArtist = await axios.post(baseURL + "/users/getInfo", { id });
    setartist(getArtist.data);
  }, []);

  const updateUser = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    const copy = { ...artist };
    copy[key] = value;
    setartist(copy);
  };

  return (
    <div className="d-flex justify-content-center">
      <Card border="dark" className="w-50 mt-3">
        <Card.Img
          src={user.photoURL}
          alt="avatar"
          className="resizeAvatar mx-auto img-fluid img-thumbnail"
        />
        <Card.Body>
          <Card.Title>User profile</Card.Title>
          <Form className="d-flex flex-column gap-3">
            <Form.Control
              readOnly={open}
              plaintext={open}
              defaultValue={user.fName}
              onChange={updateUser}
              name="firstName"
            ></Form.Control>
            <Form.Control
              readOnly={open}
              plaintext={open}
              defaultValue={user.lName}
              onChange={updateUser}
              name="lastName"
            ></Form.Control>
            <Form.Control
              readOnly={open}
              plaintext={open}
              defaultValue={artist.stageName}
              onChange={updateUser}
              name="nickname"
            ></Form.Control>
            <Form.Control
              readOnly={open}
              plaintext={open}
              defaultValue={user.email}
              onChange={updateUser}
              name="email"
            ></Form.Control>
            <Form.Control
              readOnly={open}
              plaintext={open}
              defaultValue={artist.instruments}
              onChange={updateUser}
              name="instrument"
            ></Form.Control>
            <Form.Control
              readOnly={open}
              plaintext={open}
              defaultValue={artist.genres}
              onChange={updateUser}
              name="genre"
            ></Form.Control>
            <Collapse in={!open}>
              <div id="example-collapse-text" className="d-flex gap-2">
                {!open && (
                  <Form.File custom>
                    <Form.File.Input
                      name="img"
                      onChange={(e) => {
                        setAvatar(e.target.files[0]);
                      }}
                    />
                    <Form.File.Label data-browse="Button text">
                      Profile Picture
                    </Form.File.Label>
                  </Form.File>
                )}
                {!open && (
                  <Form.Control
                    readOnly={open}
                    plaintext={open}
                    type="password"
                    placeholder="Password"
                    onChange={updateUser}
                    name="pwd"
                  ></Form.Control>
                )}
                {!open && (
                  <Form.Control
                    readOnly={open}
                    plaintext={open}
                    type="password"
                    placeholder="Password check"
                    onChange={updateUser}
                    name="pwdCon"
                  ></Form.Control>
                )}
                {!open && <Button onClick={saveChanges}>Save</Button>}
              </div>
            </Collapse>
            <Button onClick={() => setOpen(!open)}>Edit account</Button>
            <Link component={Button} to={`/userProfile/${id}/DemoPage`}>
              Go to Demo Page
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserProfile;

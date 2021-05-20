import { useState } from "react";
import { ProgressBar, Form, Button, Card } from "react-bootstrap";
import { SignUp } from "../firebase/firebase.auth";
import { useAuth } from "../context/auth";
import { uploadCloud, userUpdate } from "../firebase/firebase.api";
import AddArtistInfo from "./AddArtistInfo";
import AddVenueInfo from "./AddVenueInfo";
import AnimateHeight from "react-animate-height";

export default function SignUpForm() {
  const [avatar, setAvatar] = useState(null);
  const [validated, setValidated] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [venue, setvenue] = useState({});
  const [artist, setartist] = useState({});
  const [venHeight, setVenHeight] = useState(0);
  const [artHeight, setArtHeight] = useState(0);
  const [progressBar, setProgressBar] = useState(0);

  const { saveToken } = useAuth();

  const handleChecks = (e) => {
    const checked = e.target.checked;
    const name = e.target.name;
    if (checked) {
      if (name === "artist") {
        setArtHeight("auto");
        newUser.isArtist = true;
      } else {
        setVenHeight("auto");
        newUser.isOwner = true;
      }
    } else {
      if (name === "artist") {
        newUser.isArtist = false;
        setartist({});
        setArtHeight(0);
      } else {
        newUser.isOwner = false;
        setvenue({});
        setVenHeight(0);
      }
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const copy = { ...newUser };
    copy[name] = value;
    setNewUser(copy);
  };

  const handleFormSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const form = e.currentTarget;
    //filled
    if (form.checkValidity()) {
      setValidated(true);
      const login = await SignUp({ newUser, artist, venue });
      const upload = await uploadCloud(avatar, setAvatar, setProgressBar);
      login.curUser.photoURL = upload;
      userUpdate(login);
      saveToken(login);
    } else {
      //not filled
      setValidated(false);
    }
  };

  return (
    <>
      {validated && (
        <Card color="red" className="fillAllCard">
          Please fill all the fields
        </Card>
      )}
      <Form
        validated={validated}
        onSubmit={handleFormSubmit}
        className="formMarg formFont orderItems"
      >
        <Form.Group>
          <Form.Control
            required
            minLength={3}
            type="text"
            name="fName"
            id="fName"
            placeholder="First Name"
            onChange={handleInput}
          />
          <Form.Control
            required
            minLength={3}
            type="text"
            name="lName"
            id="lName"
            placeholder="Last Name"
            onChange={handleInput}
          />
          <Form.Control
            required
            minLength={5}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleInput}
          />
          <Form.Control
            required
            minLength={6}
            type="password"
            name="pwd"
            id="pwd"
            placeholder="Password"
            onChange={handleInput}
          />
          <Form.Control
            required
            minLength={6}
            type="password"
            name="conPwd"
            id="conPwd"
            placeholder="Confirm Password"
            onChange={handleInput}
          />
          <Form.Control
            required
            minLength={10}
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone number"
            onChange={handleInput}
          />
          <Form.Control
            type="text"
            name="bio"
            id="bio"
            placeholder="Tell us about yourself..."
            onChange={handleInput}
          />
          <Form.File custom>
            <Form.File.Input
              name="img"
              isValid={newUser.img}
              onChange={(e) => {
                setAvatar(e.target.files[0]);
              }}
            />
            <Form.File.Label data-browse="Button text">
              Profile Picture
            </Form.File.Label>
          </Form.File>
          <ProgressBar
            animated
            striped
            variant="success"
            now={progressBar}
            label={`${progressBar}%`}
          />
        </Form.Group>
        <div className="d-flex justify-content-around">
          <Form.Check
            onChange={handleChecks}
            type={"checkbox"}
            id={1}
            value="artist"
            label={"Artist"}
            name="artist"
          />
          <Form.Check
            onChange={handleChecks}
            type={"checkbox"}
            id={2}
            value="bar"
            label={"BarOwner"}
            name="bar"
          />
        </div>

        <AnimateHeight height={artHeight}>
          <AddArtistInfo artist={artist} setartist={setartist} />
        </AnimateHeight>

        <AnimateHeight height={venHeight}>
          <AddVenueInfo venue={venue} setVenue={setvenue} />
        </AnimateHeight>

        <div className="btnAlign">
          <Button className="block" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}

import { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import AddArtistInfo from "./AddArtistInfo";
import AddVenueInfo from "./AddVenueInfo";
import { SignUp } from "../firebase/firebase.auth";
import AnimateHeight from "react-animate-height";

export default function SignUpForm() {
  const [validated, setValidated] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [venue, setvenue] = useState({});
  const [artist, setartist] = useState({});
  const [venHeight, setVenHeight] = useState(0);
  const [artHeight, setArtHeight] = useState(0);

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
        setArtHeight(0);
      } else {
        newUser.isOwner = false;
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

  useEffect(() => {
    console.log(venue);
    console.log(artist);
  }, [artist, venue]);

  const handleFormSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const form = e.currentTarget;
    //filled
    if (form.checkValidity()) {
      SignUp({ newUser, artist, venue });
      setValidated(true);
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

import { Children, useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import AddArtistInfo from "./AddArtistInfo";
import AddVenueInfo from "./AddVenueInfo";
import { SignUp } from "../firebase/firebase.auth";
import { CSSTransition } from "react-transition-group";
import AnimateHeight from "react-animate-height";

export default function SignUpForm() {
  const [venueCheck, setVenueCheck] = useState(false);
  const [artCheck, setArtCheck] = useState(false);
  const [validated, setValidated] = useState(false);
  const [userBaseInfo, setUserBaseInfo] = useState({});
  const [venue, setvenue] = useState({});
  const [artist, setartist] = useState({});
  const [venHeight, setVenHeight] = useState(0);
  const [artHeight, setArtHeight] = useState(0);

  const handleChecks = (e) => {
    const checked = e.target.checked;
    const name = e.target.name;

    if (checked) {
      if (name === "artist") {
        setArtCheck(true);
        setArtHeight("auto");
      } else {
        setVenHeight("auto");
        setVenueCheck(true);
      }
    } else {
      if (name === "artist") {
        setArtHeight(0);
        setArtCheck(false);
      } else {
        setVenHeight(0);
        setVenueCheck(false);
      }
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const copy = { ...userBaseInfo };
    copy[name] = value;
    setUserBaseInfo(copy);
  };

  useEffect(() => {
    console.log(artist);
    console.log(venue);
  }, [artist, venue]);

  const handleFormSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const form = e.currentTarget;
    //filled
    if (form.checkValidity()) {
      userBaseInfo.artinfo = artist;
      userBaseInfo.venue = venue;
      SignUp(userBaseInfo);
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
        className="formMarg"
      >
        <Form.Group>
          <Form.Control
            required
            minLength={6}
            type="text"
            name="fName"
            id="fName"
            placeholder="First Name"
            onChange={handleInput}
          />
          <Form.Control
            required
            minLength={6}
            type="text"
            name="lName"
            id="lName"
            placeholder="Last Name"
            onChange={handleInput}
          />
          <Form.Control
            required
            minLength={6}
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
            minLength={6}
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
            placeholder="MyBio"
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
        <AnimateHeight height={venHeight}>
          <AddVenueInfo venue={venue} setVenue={setvenue} />
        </AnimateHeight>

        <AnimateHeight height={artHeight}>
          <AddArtistInfo artist={artist} setartist={setartist} />
        </AnimateHeight>

        <Button className="block" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

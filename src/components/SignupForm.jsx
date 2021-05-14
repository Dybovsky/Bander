import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Card } from "semantic-ui-react";
import AddArtistInfo from "./AddArtistInfo";
import AddVenueInfo from "./AddVenueInfo";

export default function SignUpForm() {
  const [userType, setUserType] = useState({ bar: null, artist: null });
  const [userBaseInfo, setUserBaseInfo] = useState({
    fName: null,
    password: null,
    lastName: null,
    email: null,
    bio: null,
    cellPhone: null,
  });
  const [notFilled, setNotFilled] = useState(false);
  const [venue, setvenue] = useState({});
  const [artist, setartist] = useState({});

  const handleChecks = (e) => {
    const checked = e.target.checked;
    const copy = { ...userType };
    const name = e.target.name;
    const value = e.target.value;

    if (checked) {
      copy[name] = value;
      setUserType(copy);
    } else {
      copy[name] = null;
      setUserType(copy);
    }
  };

  const handleBaseInfos = (e) => {
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
    e.preventDefault();
    for (let name in userBaseInfo) {
      if (userBaseInfo[name] === null) {
        setNotFilled(true);
        return;
      } else {
        setNotFilled(false);
        // Send the objs to DB
      }
    }
    userBaseInfo.artinfo = artist;
    userBaseInfo.venue = venue;
    console.log(userBaseInfo);
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        {notFilled && <Card color="red">Please fill all the fields</Card>}
        <label>
          First Name:
          <input
            type="text"
            name="fName"
            id="fName"
            placeholder="First Name"
            onChange={handleBaseInfos}
          />
          Last Name:
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={handleBaseInfos}
          />
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleBaseInfos}
          />
          Password:
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            onChange={handleBaseInfos}
          />
          Confirm Password:
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            onChange={handleBaseInfos}
          />
          Bio:
          <textarea
            type="text"
            name="bio"
            id="bio"
            placeholder="Bio"
            onChange={handleBaseInfos}
          />
          Contact Phone:
          <input
            type="number"
            name="cellPhone"
            id="cellPhone"
            placeholder="cellPhone"
            onChange={handleBaseInfos}
          />
        </label>
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
        {userType.bar !== null && (
          <AddVenueInfo
            venue={venue}
            userInfo={userBaseInfo}
            setVenue={setvenue}
          />
        )}
        {userType.artist !== null && (
          <AddArtistInfo
            userInfo={userBaseInfo}
            venueInfo={AddVenueInfo}
            artist={artist}
            setartist={setartist}
          />
        )}
        <Button>Submit</Button>
      </Form>
    </>
  );
}

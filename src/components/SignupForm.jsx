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
  const [venue, setvenue] = useState({ name: null, type: null, opDays: null, opHours: null, address: null, bio: null, website: null, kosher: null });
  const [artist, setartist] = useState({ artName: null, genre: null, instruments: null, slogan: null, address: null, bio: null, Instagram: null, kosher: null});

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
    userBaseInfo.artinfo = artist;
    userBaseInfo.venue = venue;
    for (let name in userBaseInfo) {
      if (userBaseInfo[name] === null || userBaseInfo[name] === "") {
        setNotFilled(true);
        return;
      } else {
        if(userType.bar !== null) {
          for (let name in venue) {
            if (venue[name] === null || venue[name] === "") {
              setNotFilled(true);
              return;
            } else {
              setNotFilled(false);
            }
          }
        }
        if(userType.artist !== null) {
          for (let name in artist) {
            if (artist[name] === null || artist[name] === "") {
              setNotFilled(true);
              return;
            } else {
              setNotFilled(false);
            }
          }
        }
      }
        setNotFilled(false);
        // Send the objs to DB
    };
    console.log("Done")
  };

  return (
    <>
      {notFilled && <Card color="red" className="fillAllCard" >Please fill all the fields</Card>}
      <Form onSubmit={handleFormSubmit} className="signUpForms">
        <label>
          <input
            type="text"
            name="fName"
            id="fName"
            placeholder="First Name"
            onChange={handleBaseInfos}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={handleBaseInfos}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleBaseInfos}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleBaseInfos}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Confirm Password"
            onChange={handleBaseInfos}
          />
            <input
              type="number"
              name="cellPhone"
              id="cellPhone"
              placeholder="Contact Phone"
              onChange={handleBaseInfos}
            />
          <textarea
            type="text"
            name="bio"
            id="bio"
            placeholder="MyBio"
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

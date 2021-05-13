import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import AddArtistInfo from "./AddArtistInfo";
import AddVenueInfo from "./AddVenueInfo";

export default function SignupForm() {
  const [userType, setUserType] = useState({ bar: null, artist: null });

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

  useEffect(() => {
    console.log(userType);
  }, [userType]);

  return (
    <>
      <Form>
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

        {userType.bar !== null && <AddVenueInfo />}
        {userType.artist !== null && <AddArtistInfo />}
      </Form>
    </>
  );
}

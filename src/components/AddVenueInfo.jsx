import { React, useEffect, useState } from "react";
import { Button, Form, Segment, TextArea, Card } from "semantic-ui-react";
import { useParams } from "react-router-dom";

const AddVenueInfo = () => {
  let userId = useParams();
  const [thisUserVenue, setThisUserVenue] = useState();
  const [notFilled, setNotFilled] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    type: "",
    opDays: "",
    opHours: "",
    address: "",
    bio: "",
    website: "",
    kosher: "",
  });

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    const copy = { ...inputs };
    copy[key] = value;
    setInputs(copy);
  };

  const handleFormSubmit = () => {
    for (let key in inputs) {
      if (inputs[key] === "") {
        setNotFilled(true);
        return;
      } else {
        setNotFilled(false);
      }
    }
  };

  return (
    <>
      <div className="fs-2 text-start m-5" style={{ color: "lightsteelblue" }}>
        <u>
          <h1>AddVenueInfo</h1>
          {notFilled && <Card color="red">Did not fill</Card>}
        </u>
        <Segment>
          <Form className="venueForm" onSubmit={handleFormSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="name"
                label="Establishment name"
                placeholder={
                  (thisUserVenue && thisUserVenue.estName) ||
                  "Establishment name"
                }
                onChange={handleChange}
              />
              <Form.Input
                fluid
                name="type"
                label="Establishment type (Bar/Restaurant, etc)"
                placeholder={
                  (thisUserVenue && thisUserVenue.estType) ||
                  "Establishment type"
                }
                onChange={handleChange}
              />
              <Form.Input
                fluid
                name="opDays"
                label="Days open in th week"
                placeholder={
                  (thisUserVenue && thisUserVenue.daysWeek) ||
                  "Days open in th week"
                }
                onChange={handleChange}
              />
              <Form.Input
                fluid
                name="opHours"
                label="Hours open in the week"
                placeholder={
                  (thisUserVenue && thisUserVenue.hoursWeek) ||
                  "Hours open in the week"
                }
                onChange={handleChange}
              />
              <Form.Input
                fluid
                name="address"
                label="Address"
                placeholder={
                  (thisUserVenue && thisUserVenue.address) || "Address"
                }
                onChange={handleChange}
              />
              <TextArea
                fluid
                name="bio"
                label="Bio"
                placeholder={(thisUserVenue && thisUserVenue.bio) || "Bio"}
                onChange={handleChange}
              />
              <Form.Input
                name="website"
                label="http://"
                placeholder={
                  (thisUserVenue && thisUserVenue.site) || "mysite.com"
                }
                onChange={handleChange}
              />
              <Form.Input
                name="kosher"
                label="Kosher"
                placeholder={
                  (thisUserVenue && thisUserVenue.kosher) || "kosher?"
                }
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Segment>
      </div>
    </>
  );
};

export default AddVenueInfo;

import { React, useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Card } from "semantic-ui-react";

const AddVenueInfo = (props) => {
  const { setVenue ,venue} = props;
  const [notFilled, setNotFilled] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    const copy = { ...venue };
    copy[key] = value;
    setVenue(copy);
  };

  return (
    <>
      <div className="fs-2 text-start m-5" style={{ color: "lightsteelblue" }}>
        <u>
          <h1>Add Venue Info</h1>
        </u>
        <Form>
          {notFilled && <Card color="red">Please fill all the fields</Card>}
          <label>
            Establishment name:
            <input
              type="text"
              name="name"
              placeholder="Establishment name"
              onChange={handleChange}
            />
            Establishment type:
            <input
              type="text"
              name="type"
              placeholder="Establishment type"
              onChange={handleChange}
            />
            Days open in th week"
            <input
              type="text"
              name="opDays"
              placeholder="Days open in th week"
              onChange={handleChange}
            />
            Hours open in the week:
            <input
              type="text"
              name="opHours"
              placeholder="Hours open in the week"
              onChange={handleChange}
            />
            Address
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
            />
            Bio:
            <textarea
              type="text"
              name="bio"
              placeholder="Bio"
              onChange={handleChange}
            />
            Website:
            <input
              type="text"
              name="website"
              placeholder="mysite.com"
              onChange={handleChange}
            />
            Kosher:
            <input
              type="text"
              name="kosher"
              placeholder="kosher?"
              onChange={handleChange}
            />
          </label>
        </Form>
      </div>
    </>
  );
};

export default AddVenueInfo;

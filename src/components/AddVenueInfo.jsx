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
        <Form className="signUpForms">
          <label>
            <input
              type="text"
              name="name"
              placeholder="Establishment name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="type"
              placeholder="Establishment type"
              onChange={handleChange}
            />
            <input
              type="text"
              name="opDays"
              placeholder="Days open in th week"
              onChange={handleChange}
            />
            <input
              type="text"
              name="opHours"
              placeholder="Hours open in the week"
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
            />
            <textarea
              type="text"
              name="bio"
              placeholder="My Establishment Bio"
              onChange={handleChange}
            />
            <input
              type="text"
              name="website"
              placeholder="mysite.com"
              onChange={handleChange}
            />
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

import { React, useState } from "react";
import { Form } from "react-bootstrap";

const AddVenueInfo = (props) => {
  const { setVenue, venue } = props;
  const [daysList, setDaysList] = useState([]);
  //  const [hoursList, setHoursList]
  const handleChange = (e) => {
    if (e.target.name === "opDays") {
      const copy = [...daysList];
      if (e.target.checked) {
        copy.push(e.target.value);
        setDaysList(copy);
        return;
      } else {
        copy.filter((day) => day !== e.target.value);
        setDaysList(copy);
        return;
      }
    }
    setVenue({
      ...venue,
      [e.target.name]: e.target.value,
    });
    venue.opDays = daysList;

    console.log("est", venue);
  };
  const venues = [
    "Bar",
    "Club",
    "Theater",
    "StandUp",
    "Dance Bar",
    "Cafe",
    "Concert",
    "Restaurant",
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ];

  return (
    <>
      <Form className="mx-5 formMarg">
        <h1>Tell us a bit more about Your Establishment!</h1>
        <Form.Group>
          <Form.Control
            type="text"
            name="name"
            placeholder="Establishment name"
            onChange={handleChange}
          />
          <Form.Label>Choose type:</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="type">
            {venues.map((venue) => {
              return <option key={venue}>{venue}</option>;
            })}
          </Form.Control>
          <Form.Label>Working Days</Form.Label>
          <Form.Group className="d-flex flex-wrap">
            {days.map((day) => (
              <div key={day}>
                <Form.Check
                  inline
                  label={day}
                  name="opDays"
                  type="checkbox"
                  value={day}
                  onChange={handleChange}
                />
              </div>
            ))}
          </Form.Group>
          <hr />
          <Form.Label>Select hours of working</Form.Label>
          <Form.Group className="d-flex">
            <br />
            <Form.Label>from: &nbsp;&nbsp;</Form.Label>
            <br />
            <Form.Control
              as="select"
              className="w-auto"
              name="hoursFrom"
              onChange={handleChange}
            >
              {hours.map((hour) => {
                return <option key={hour}>{hour}</option>;
              })}
            </Form.Control>
            &nbsp;&nbsp;
            <Form.Label>to: &nbsp;&nbsp;</Form.Label>
            <Form.Control
              as="select"
              className="w-auto"
              name="hoursTo"
              onChange={handleChange}
            >
              {hours.map((hour) => {
                return <option key={hour}>{hour}</option>;
              })}
            </Form.Control>
          </Form.Group>
          {/* <Form.Control
            type="text"
            name="opHours"
            placeholder="Hours open in the week"
            onChange={handleChange}
          /> */}
          <Form.Control
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            name="bio"
            placeholder="My Establishment Bio"
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            name="website"
            placeholder="Your Website"
            onChange={handleChange}
          />
          <Form.Label>Kosher</Form.Label>
          <Form.Control
            as="select"
            name="kosher"
            placeholder="kosher?"
            onChange={handleChange}
          >
            <option>No</option>
            <option>Yes</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddVenueInfo;

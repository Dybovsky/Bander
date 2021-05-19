import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { Button, Form } from "react-bootstrap";

const BarProfile = () => {
  const [open, setOpen] = useState(true);
  const [updatedBar, setUpdatedBar] = useState([]);
  const [bar, setbar] = useState({});
  const [daysList, setDaysList] = useState([]);

  const saveChanges = (bar) => {
    console.log("updated bar", updatedBar);
  };

  useEffect(() => {
    //Get db bar data
    const mocBar = {
      address: "shtrasse",
      bio: "was created at 2014",
      hoursFrom: "07:00",
      hoursTo: "01:00",
      name: "Tomat",
      opDays: ["Monday", "Thursday"],
      type: "Club",
      website: "tomat.ru ",
    };
    setbar(mocBar);
    setUpdatedBar(mocBar);
  }, []);

  const updateBar = (e) => {
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
    setUpdatedBar({
      ...updatedBar,
      [e.target.name]: e.target.value,
    });
    updatedBar.opDays = daysList;
    console.log("bar", updatedBar);
  };
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
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
    <div className="card shadow rounded w-75 p-3 m-auto mt-5 bg-light d-block">
      <h1>Venue</h1>
      <br />
      <div>
        <Form className="m-1 p-1">
          <Form.Label className="m-1 p-1">
            <h4>Type:</h4>
            <Form.Control
              as="select"
              className="m-1 p-1"
              disabled={open}
              value={updatedBar.type}
              onChange={updateBar}
              name="type"
            >
              {venues.map((venue) => {
                return <option key={venue}>{venue}</option>;
              })}
            </Form.Control>
          </Form.Label>
          <Form.Label className="m-1 p-1">
            <h4>Company:</h4>
            <Form.Control
              className="m-1 p-1"
              readOnly={open}
              plaintext={open}
              defaultValue={updatedBar.name}
              onChange={updateBar}
              name="name"
            ></Form.Control>
          </Form.Label>
          <Form.Label className="m-1 p-1">
            <h4>Address:</h4>
            <Form.Control
              className="m-1 p-1"
              readOnly={open}
              plaintext={open}
              defaultValue={updatedBar.address}
              onChange={updateBar}
              name="address"
            ></Form.Control>
          </Form.Label>
          <Form.Label className="m-1 p-1">
            <h4>Site:</h4>
            <Form.Control
              className="m-1 p-1"
              readOnly={open}
              plaintext={open}
              defaultValue={updatedBar.website}
              onChange={updateBar}
              name="website"
            ></Form.Control>
          </Form.Label>

          <Form.Label className="m-1 p-1 d-flex">
            <h4>Opening Hours</h4>

            <Form.Label>&nbsp;&nbsp; from: &nbsp;&nbsp;</Form.Label>
            <Form.Control
              as="select"
              className="m-1 p-1 w-auto"
              disabled={open}
              value={updatedBar.hoursFrom}
              onChange={updateBar}
              name="hoursFrom"
            >
              {hours.map((hour) => {
                return <option key={hour}>{hour}</option>;
              })}
            </Form.Control>
            <Form.Label>to: &nbsp;&nbsp;</Form.Label>
            <Form.Control
              as="select"
              className="m-1 p-1 w-auto"
              disabled={open}
              value={updatedBar.hoursTo}
              onChange={updateBar}
              name="hoursTo"
            >
              {hours.map((hour) => {
                return <option key={hour}>{hour}</option>;
              })}
            </Form.Control>
          </Form.Label>
          <Form.Label className="m-1 p-1">
            <h4>Bio:</h4>
            <Form.Control
              className="m-1 p-1"
              readOnly={open}
              plaintext={open}
              defaultValue={updatedBar.bio}
              onChange={updateBar}
              name="bio"
            ></Form.Control>
          </Form.Label>
          <Form.Label className="m-1 p-1">
            <h4>Kosher:</h4>
            <Form.Control
              as="select"
              className="m-1 p-1"
              disabled={open}
              defaultValue={bar.kosher}
              onChange={updateBar}
              name="kosher"
            >
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Label>
          <Form.Label className="m-1 p-1 d-flex flex-wrap">
            <h4>Working Days:</h4>
          </Form.Label>
          <div className="m-2 p-2 d-flex flex-wrap">
            {days.map((day) => (
              <div key={day}>
                <Form.Check
                  inline
                  className="m-3 p-1 "
                  value={day}
                  onChange={updateBar}
                  name="opDays"
                  label={day}
                  type="checkbox"
                  disabled={open}
                  // look at this shit bevakasha
                  // dont work properrly huy znaet why
                  // checked={
                  //   updatedBar.opDays &&
                  //   (updatedBar.opDays.filter((day1) => day1 !== day)
                  //     ? false
                  //     : true)
                  // }
                ></Form.Check>
              </div>
            ))}
          </div>
        </Form>
      </div>
      <Button className="m-2 " onClick={() => setOpen(!open)}>
        Edit venue
      </Button>
      {!open && (
        <Button className="m-2 " onClick={() => saveChanges(updatedBar)}>
          Save
        </Button>
      )}
    </div>
  );
};

export default BarProfile;

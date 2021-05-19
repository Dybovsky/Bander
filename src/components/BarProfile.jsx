import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { Button, Form } from "react-bootstrap";

const BarProfile = () => {
  const [open, setOpen] = useState(true);
  const [updatedBar, setUpdatedBar] = useState();
  const [bar, setbar] = useState({})
  
  const saveChanges = (bar) => {
    console.log("updated bar", updatedBar);
  };

  useEffect(() => {
    //Get db bar data
  }, [])

  const updateBar = (e) => {
    setUpdatedBar({
      ...updatedBar,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card shadow rounded w-75 p-3 m-auto mt-5 bg-light d-block">
      <h1>Venue</h1>
      <br />
      <div>
        <Form className="m-1 p-1">
          <Form.Label className="m-1 p-1">
            <h4>Type:</h4>
            <Form.Control
              className="m-1 p-1"
              readOnly={open}
              plaintext={open}
              defaultValue={bar.type}
              onChange={updateBar}
              name="type"
            ></Form.Control>
          </Form.Label>
          <Form.Label className="m-1 p-1">
            <h4>Company:</h4>
            <Form.Control
              className="m-1 p-1"
              readOnly={open}
              plaintext={open}
              defaultValue={bar.name}
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
              defaultValue={bar.address}
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
              defaultValue={bar.website}
              onChange={updateBar}
              name="website"
            ></Form.Control>
          </Form.Label>
          <Form.Label className="m-1 p-1">
            <h4>Opening days:</h4>
            <Form.Control
              className="m-1 p-1"
              readOnly={open}
              plaintext={open}
              defaultValue={bar.opDays}
              onChange={updateBar}
              name="opDays"
            ></Form.Control>
          </Form.Label>
          <Form.Label className="m-1 p-1">
            <h4>Opening Hours:</h4>
            <Form.Control
              className="m-1 p-1"
              readOnly={open}
              plaintext={open}
              defaultValue={bar.opHours}
              onChange={updateBar}
              name="opHours"
            ></Form.Control>
          </Form.Label>
          <Form.Label className="m-1 p-1">
            <h4>Bio:</h4>
            <Form.Control
              className="m-1 p-1"
              readOnly={open}
              plaintext={open}
              defaultValue={bar.bio}
              onChange={updateBar}
              name="bio"
            ></Form.Control>
          </Form.Label>
          <Form.Label className="m-1 p-1">
            <h4>Kosher:</h4>
            <Form.Control
              className="m-1 p-1"
              readOnly={open}
              plaintext={open}
              defaultValue={bar.kosher}
              onChange={updateBar}
              name="kosher"
            ></Form.Control>
          </Form.Label>
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

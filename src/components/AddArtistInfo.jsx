import { React } from "react";
import { Button, Form, Card } from "react-bootstrap";

const AddVenueInfo = (props) => {
  const { setartist, artist } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    const copy = { ...artist };
    copy[key] = value;
    setartist(copy);
  };
  return (
    <>
      <Form className="mx-5 formMarg">
        <u>
          <h1>Add Artist Info</h1>
        </u>
        <Form.Group>
          <Form.Control
            name="nickName"
            placeholder="Nickname"
            onChange={handleChange}
          />
          <Form.Control
            name="genre"
            placeholder="Genre"
            onChange={handleChange}
          />
          <Form.Control
            name="instruments"
            placeholder="Instruments I play"
            onChange={handleChange}
          />
          <Form.Control
            name="slogan"
            placeholder="Your slogan"
            onChange={handleChange}
          />
          <Form.Control
            name="address"
            placeholder="City"
            onChange={handleChange}
          />
          <Form.Control
            name="bio"
            placeholder="Artistic Bio"
            onChange={handleChange}
          />
          <Form.Control
            name="Instagram"
            placeholder="Instagram"
            onChange={handleChange}
          />
          <Form.Control
            name="kosher"
            placeholder="kosher?"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default AddVenueInfo;

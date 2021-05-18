import { React } from "react";
import { Form } from "react-bootstrap";

const AddVenueInfo = (props) => {
  const { setVenue, venue } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    const copy = { ...venue };
    copy[key] = value;
    setVenue(copy);
  };

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
          <Form.Control
            type="text"
            name="type"
            placeholder="Establishment type"
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            name="opDays"
            placeholder="Days open in th week"
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            name="opHours"
            placeholder="Hours open in the week"
            onChange={handleChange}
          />
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
          <Form.Control
            type="text"
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

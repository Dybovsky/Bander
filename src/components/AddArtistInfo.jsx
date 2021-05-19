import { React } from "react";
import { Form } from "react-bootstrap";

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
        <h1>Tell us a bit more about Yourself!</h1>
        <Form.Group>
          <Form.Control
            name="stageName"
            placeholder="Stage Name"
            onChange={handleChange}
          />
          <Form.Control
            name="genres"
            placeholder="Genres"
            onChange={handleChange}
          />
          <Form.Control
            name="instruments"
            placeholder="My expretise (Vocals ,Instruments, etc.)"
            onChange={handleChange}
          />
          <Form.Control
            name="location"
            placeholder="Location (How mobile are you ?)"
            onChange={handleChange}
          />
          <Form.Control
            name="Instagram"
            placeholder="Instagram"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default AddVenueInfo;

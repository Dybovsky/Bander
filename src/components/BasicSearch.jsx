import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { searchBasic } from "../firebase/firebase.api";
import EventsList from "./EventsList";

const BasicSearch = () => {
  const [data, setData] = useState({});
  const [events, setEvents] = useState();
  const { user } = useAuth();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const copy = { ...data };
    copy[name] = value;
    setData(copy);
  };

  const handleFormSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const result = await searchBasic(data);
      setEvents(result);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleClearEvents = () => {
    setEvents();
  };

  return (
    <>
   <div className="card h-75 shadow rounded w-50 m-auto mt-5 text-white bg-dark">
          <h2 className="m-3 align-self-center"><u>Search Page</u></h2>
          <Link className="btn btn-primary w-25 m-3 align-self-center" to="/search/advanced">Advanced Search</Link>
    </div>
    {events && <button className="btn btn-primary m-5 justify-self-center" onClick={handleClearEvents}>Back to Search</button>}
      {!events && <div className="card h-50 shadow rounded w-50 m-auto mt-5 text-white bg-dark">
      <Form
          onSubmit={handleFormSubmit}
          className="formMarg formFont orderItems w-50 text-center align-self-center mt-5"
        >
          <Form.Group>
            <Form.Label>Genre</Form.Label>
            <Form.Control
              as="select"
              name="genre"
              id="genre"
              onChange={handleInput}
            >
              <option>Choose...</option>
              <option value="rock">Rock</option>
              <option value="metal">Metal</option>
              <option value="pop">Pop</option>
              <option value="blues">Blues</option>
              <option value="jazz">Jazz</option>
              <option value="country">Country</option>
              <option value="traditional">Traditional</option>
              <option value="rap">Rap</option>
            </Form.Control>
            <Form.Label className="mt-5">Venue Type</Form.Label>
            <Form.Control
              as="select"
              name="venType"
              id="venType"
              onChange={handleInput}
            >
              <option>Choose...</option>
              <option value="cafe">Cafe</option>
              <option value="bar">Bar</option>
              <option value="restaurant">Restaurant</option>
              <option value="concert">Concert</option>
              <option value="concert">Club</option>
              <option value="concert">Theater</option>
              <option value="concert">Stand-up</option>
              <option value="concert">Open Space</option>
            </Form.Control>

            <div className="btnAlign">
              <Button className="block m-5" type="submit">
                Search
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>}
      <div>{events && <EventsList eventArray={events} />}</div>
    </>
  );
};

export default BasicSearch;

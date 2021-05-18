import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import EventsList from "./EventsList";

const BasicSearch = () => {
  const [data, setData] = useState({});
  const [events, setEvents] = useState([]);
  const auth = useAuth();

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
    try{
        // const result = await BasicSearch(data, auth.token);
        // setEvents(result.events);
        alert(`${data.genre}, ${data.venue}`);
    } catch(err){
        alert(err.message);
    }
  };

  return (
    <>
    <div className="card h-75 shadow rounded w-75 m-auto mt-5 text-white bg-dark">
          <div className="d-flex flex-column justify-content-around">
          <h2 className="align-self-center"><u>Basic Search Event</u></h2>
          <Link className="btn btn-primary w-50 align-self-center m-1" to="/search/advanced">Advanced Search</Link>
          </div>
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
          <Form.Label>Venue Type</Form.Label>
          <Form.Control 
            as="select" 
            name="venue"
            id="venue" 
            onChange={handleInput}
            >
                <option>Choose...</option>
                <option value="cafe">Cafe'</option>
                <option value="bar">Bar</option>
                <option value="pub">Pub</option>
                <option value="restaurant">Restaurant</option>
                <option value="concert">Concert</option>
            </Form.Control>

        <div className="btnAlign">
          <Button className="block" type="submit">
            Submit
          </Button>
        </div>
        </Form.Group>
      </Form>
      {!events && <h3 className="text-center">Waiting for your search</h3>}
        </div>
        <div>
          {events && <EventsList eventArray={events}/>}
        </div>
    </>
  );
}

export default BasicSearch;
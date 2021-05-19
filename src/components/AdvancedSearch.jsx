import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import EventsList from "./EventsList";


const AdvancedSearch = () => {

    const mockEvents = [
        {
            "band_avatar": "https://res.cloudinary.com/urielnaiman/image/upload/v1621364240/kyle-wong-rrHtkX1rLP0-unsplash_tfjdzx.jpg",
            "band_name": "Rockmind",
            "location": "Tel-Aviv",
            "date": "2021-05-19"
        },
        {
            "band_avatar": "https://res.cloudinary.com/urielnaiman/image/upload/v1621364240/austin-wade-YZpuFugdy8Q-unsplash_udxl77.jpg",
            "band_name": "Popsicle",
            "location": "Haifa",
            "date": "2021-06-23"
        },
        {
            "band_avatar": "https://res.cloudinary.com/urielnaiman/image/upload/v1621364237/vidar-nordli-mathisen-qusExK3sba8-unsplash_eichuo.jpg",
            "band_name": "Mordy Miler",
            "location": "Jerusalem",
            "date": "2021-05-29"
        }
    ];
    
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
        alert(`${data.location}, ${data.genre}, ${data.venue}\n Between:${data.date_start} and ${data.date_end}`);
    } catch(err){
        alert(err.message);
    }
  };

  const handleClearEvents = () => {
    setEvents([]);
  };
  
  return (
    <>
    {mockEvents && <button className="btn btn-primary m-5 justify-self-center" onClick={handleClearEvents}>Back to Search</button>}
    {!mockEvents && <div className="card h-75 shadow rounded w-75 m-auto mt-5 text-white bg-dark">
          <h2 className="align-self-center"><u>Advanced Search Event</u></h2>
          <Link className="btn btn-primary w-50 align-self-center m-1" to="/search">Basic Search</Link>
      <Form
        onSubmit={handleFormSubmit}
        className="formMarg formFont orderItems w-75 text-center align-self-center mt-5"
      >
        <Form.Group>
        <div className="d-flex justify-content-around m-5">
            <div className="d-flex flex-column">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    required
                    minLength={3}
                    type="text"
                    name="location"
                    id="location"
                    placeholder="location"
                    onChange={handleInput}
                    className="m-1"
                />
                <Form.Label>Genre</Form.Label>
                    <Form.Control 
                    as="select" 
                    name="genre"
                    id="genre" 
                    onChange={handleInput}
                    className="m-1"
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
                    className="m-1"
                    >
                        <option>Choose...</option>
                        <option value="cafe">Cafe'</option>
                        <option value="bar">Bar</option>
                        <option value="pub">Pub</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="concert">Concert</option>
                    </Form.Control>
                </div>
            <div className="d-flex flex-column">
                <Form.Label>Dates</Form.Label>
                <Form.Label>From</Form.Label>
                    <Form.Control 
                    type="date" 
                    name="date_start"
                    id="date_start" 
                    onChange={handleInput}
                    className="m-1"
                    />
                <Form.Label>To</Form.Label>
                    <Form.Control 
                    type="date" 
                    name="date_end"
                    id="date_end" 
                    onChange={handleInput}
                    className="m-1"
                    />

            <div className="btnAlign">
            <Button className="block" type="submit">
                Submit
            </Button>
            </div>
            </div>
        </div>
        </Form.Group>
      </Form>
      {!mockEvents && <h3 className="text-center">Waiting for your search</h3>}
        </div>}
        <div>
          {mockEvents && <EventsList eventArray={mockEvents}/>}
        </div>
    </>
  );
}


export default AdvancedSearch;
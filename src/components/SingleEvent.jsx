import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

const SingleEvent = ({ event }) => {
    const auth = useAuth();
    
    const handleOnClick = () => {
        alert("implement event page");
        };

    return (
        <div className="card w-25 m-2 text-white bg-dark">
            <img className="card-img-top" src={event.band_avatar} alt="Cool Event Picture"/>
            <div className="card-body">
                <h5 className="card-title">{`Band name: ${event.band_name}`}</h5>
                <p className="card-text">{`Location: ${event.location}`}</p>
                <p className="card-text">{`Date:${event.date}`}</p>
                <Link className="btn btn-primary" onClick={handleOnClick}>See Event</Link>
            </div>
        </div>
    );
}
export default SingleEvent;
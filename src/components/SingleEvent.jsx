import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

const SingleEvent = ({ event }) => {
    const auth = useAuth();
    
    const handleOnClick = () => {
        alert("implement event page");
        };

    return (
        <div className="card w-25 m-2">
            <img className="card-img-top" src={event.picture} alt="Cool Event Picture"/>
            <div className="card-body">
                <h5 className="card-title">mock name</h5>
                <p className="card-text">mock location</p>
                <Link className="btn btn-primary" onClick={handleOnClick}>See more</Link>
            </div>
        </div>
    );
}
export default SingleEvent;
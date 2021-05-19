import SingleEvent from "./SingleEvent";


const EventsList = ({ eventArray }) => {
    return (
        <div className="d-flex flex-wrap m-2 mt-5 w-100 justify-content-around">
            {eventArray.map(event => 
            <SingleEvent key={event.id} event={event} />
            )}
        </div>
    );
}
export default EventsList;
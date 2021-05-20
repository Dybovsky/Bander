import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import AnimateHeight from "react-animate-height";
import Post from "./Post";
import { addPost } from "../firebase/firebase.api";
const genres = [
  "Rock",
  "Metal",
  "Pop",
  "Blues",
  "Jazz",
  "Country",
  "Traditional",
  "Rap",
];
// const venues = ["Bar", "Club", "Theater", "StandUp", "Dance Bar", "Cafe", "Concert", "Restaurant"]

const AddPost = () => {
  const [post, setPost] = useState({});
  const [genresList, setGenresList] = useState([]);
  const [postHeight, setPostHeight] = useState(0);
  const handleChange = (e) => {
    if (e.target.name === "genre") {
      const copy = [...genresList];
      if (e.target.checked) {
        copy.push(e.target.value);
        setGenresList(copy);
        return;
      } else {
        copy.filter((genre) => genre !== e.target.value);
        setGenresList(copy);
        return;
      }
    }
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    // console.log("offer", post);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
    await addPost(post);
    alert("Post added successfully")
    setPost({});
    window.history.back();
    } catch(err){
      alert(err.message);
    }
  };

  const onConfirm = () => {
    post.genres = genresList;
    setPostHeight("auto");
  };
  return (
    <div className="main">
      <Form onSubmit={onFormSubmit}>
        <Form.Label>
          <h1>Fill up all details about your job offer</h1>
        </Form.Label>
        {/* <Form.Group>
          <Form.Label>Chose a venue</Form.Label>
          <Form.Control as="select" onChange={handleChange} name="venue">
            {venues.map((venue) => {
              return <option key={venue}>{venue}</option>;
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter company name "
            onChange={handleChange}
            name="companyName"
          />
        </Form.Group> */}
         <Form.Group>
          <Form.Control
            className="p-2 m-2"
            type="text"
            placeholder="Enter address "
            onChange={handleChange}
            name="location"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 m-2"
            type="date"
            placeholder="Choose a date"
            onChange={handleChange}
            name="date"
          />
        </Form.Group>
        <Form.Group>
        <Form.Control
              className="p-2 m-2"
              as="select"
              name="venType"
              id="venType"
              onChange={handleChange}
            >
              <option>Venue Type</option>
              <option value="cafe">Cafe</option>
              <option value="bar">Bar</option>
              <option value="restaurant">Restaurant</option>
              <option value="concert">Concert</option>
              <option value="concert">Club</option>
              <option value="concert">Theater</option>
              <option value="concert">Stand-up</option>
              <option value="concert">Open Space</option>
            </Form.Control>
            </Form.Group>
        <Form.Group>
          <Form.Control
            className="p-2 m-2"
            as="textarea"
            placeholder="What are you looking for?"
            onChange={handleChange}
            name="query"
          />
        </Form.Group>
        <Form.Group className="d-flex flex-wrap">
          {genres.map((genre) => (
            <div key={genre}>
              <Form.Check
                inline
                label={genre}
                name="genre"
                type="checkbox"
                value={genre}
                onChange={handleChange}
                // onClick={}
              />
            </div>
          ))}
        </Form.Group>
        <AnimateHeight height={postHeight}>
          <Post post={post} />
        </AnimateHeight>
        {postHeight !== 0 && (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </Form>
      {postHeight === 0 && <Button onClick={onConfirm}>Confirm</Button>}
    </div>
  );
};
export default AddPost;

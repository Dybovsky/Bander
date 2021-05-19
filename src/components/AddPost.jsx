import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import AnimateHeight from "react-animate-height";
import Post from "./Post";
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
const venues = ["Bar", "Club", "Theatre", "StandUp", "Open space", "Cafe", "Concert", "Restaurant"]

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
    console.log("offer", post);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    //backend
    console.log(post);
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
        <Form.Group>
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
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter address "
            onChange={handleChange}
            name="address"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="date"
            placeholder="Choose a date"
            onChange={handleChange}
            name="date"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="What are you looking for?"
            onChange={handleChange}
            name="query"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose genre</Form.Label>
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
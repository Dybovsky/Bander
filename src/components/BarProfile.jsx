import { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { Button, Form ,Link} from "react-bootstrap";

const BarProfile = () => {
  // const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [bar, setbar] = useState({})
  //   const bar = auth.user;

  const [updatedUser, setUpdatedUser] = useState(null);

  const saveChanges = (user) => {
    console.log("updated user", updatedUser);
    //send to db
  };

  useEffect(() => {
    // retrive from db 
  }, [])
  const updateUser = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Bar profile</h1>
      <div>
        <img src={bar.image} alt="avatar" />
        <Form>
          <Form.Control
            readOnly={open}
            plaintext={open}
            defaultValue={bar.company}
            onChange={updateUser}
            name="company"
          ></Form.Control>
          <Form.Control
            readOnly={open}
            plaintext={open}
            defaultValue={bar.address}
            onChange={updateUser}
            name="address"
          ></Form.Control>
          <Form.Control
            readOnly={open}
            plaintext={open}
            defaultValue={bar.cuisine}
            onChange={updateUser}
            name="cuisine"
          ></Form.Control>
          <Form.Control
            readOnly={open}
            plaintext={open}
            defaultValue={bar.email}
            onChange={updateUser}
            name="email"
          ></Form.Control>

          {!open && (
            <Form.Control
              readOnly={open}
              plaintext={open}
              type="password"
              placeholder="Password"
              defaultValue=""
              onChange={updateUser}
              name="password"
            ></Form.Control>
          )}
          {!open && (
            <Form.Control
              readOnly={open}
              plaintext={open}
              type="password"
              placeholder="Password check"
              defaultValue=""
              onChange={updateUser}
              name="passwordCheck"
            ></Form.Control>
          )}
        </Form>
      </div>

      <Button onClick={() => setOpen(!open)}>Edit account</Button>
      {!open && <Button onClick={() => saveChanges(updatedUser)}>Save</Button>}
    </div>
  );
};

export default BarProfile;

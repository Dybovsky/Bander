import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useAuth } from "../context/auth";
import { signInEmail } from "../firebase/firebase.auth";
import React, { useEffect } from 'react'
import validateSignIn from './validate';

export default function SignInEmailModal() {
  const [open, setOpen] = useState(false);
  const [pwd, setpwd] = useState(null);
  const [mail, setmail] = useState(null);
  const { saveToken } = useAuth();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return async function cleanup() {
      await document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])


  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputs = { email: mail, password: pwd }
    const validationErrors = validateSignIn(inputs);
    const noErrors = Object.keys(validationErrors).length === 0;
    setErrors(validationErrors);
    if (noErrors) {
      const userInfo = await signInEmail(mail, pwd);
      saveToken(userInfo);
      console.log("Authenticated", inputs);
    } else {
      console.log("errors try again", validationErrors);
    }

  }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      setOpen(false)
    }
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Sign in Email</Button>
      <Modal show={open}>
        <Form className="p-3" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setpwd(e.target.value)}
              type="password"
              placeholder="Password"
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2" block>
            Log in
          </Button>
        </Form>
        <Button className="m-1" onClick={() => setOpen(false)}>
          close
        </Button>
      </Modal>
    </>
  );
}

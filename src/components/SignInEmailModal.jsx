import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useAuth } from "../context/auth";
import { signInEmail } from "../firebase/firebase.auth";

export default function SignInEmailModal() {
  const [open, setOpen] = useState(false);
  const [pwd, setpwd] = useState(null);
  const [mail, setmail] = useState(null);
  const { saveToken } = useAuth();
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mail !== null && pwd !== null) {
      try {
        setAlert(false)
        const userInfo = await signInEmail(mail, pwd);
        saveToken(userInfo);
      } catch (error) {
        setAlert(true)
        setAlertMsg(error.message)

      }
    } else {
      setAlert(true)
      setAlertMsg("Please insert an E-mail and a Password")
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Sign in Email</Button>
      <Modal show={open}>
        <Form className="p-3" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            {alert && <h5>{alertMsg}</h5>}
            <Form.Control
              onChange={(e) => setmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setpwd(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2" block>
            Log in
          </Button>
        </Form>
        <Button className="m-1" onClick={() => {setOpen(false); setAlert(false)}}>
          close
        </Button>
      </Modal>
    </>
  );
}

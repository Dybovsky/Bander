import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useAuth } from "../context/auth";
import { signInEmail } from "../firebase/firebase.auth";

export default function SignInEmailModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [pwd, setpwd] = useState(null);
  const [mail, setmail] = useState(null);
  const { saveToken } = useAuth();

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const userInfo = await signInEmail(mail, pwd);
    saveToken(userInfo);
    setLoading(false)
  };

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
        {loading ? 
          <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button> :  <Button variant="primary" type="submit" className="mt-2" block>
            Log in
          </Button> } 
      </Modal>
    </>
  );
}

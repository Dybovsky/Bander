import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SignUpForm from "./SignupForm";

export default function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (bool) => {
    setIsOpen(bool);
  };

  return (
    <>
      <Button onClick={() => handleToggle(true)}>SignUp</Button>
      <Modal backdrop="static" show={isOpen} centered size="lg" className="formFont">
        <Modal.Header>
          <Modal.Title>Sign-up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill out all the information below.</p>
          <SignUpForm />
        </Modal.Body>
        <Button onClick={() => handleToggle(false)}>Close</Button>
      </Modal>
    </>
  );
}

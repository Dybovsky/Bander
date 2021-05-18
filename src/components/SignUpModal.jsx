import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SignUpForm from "./SignupForm";

export default function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (bool) => {
    setIsOpen(bool);;
  };

  return (
    <>
      <Button onClick={() => handleToggle(true)}>SignUp</Button>
      <Modal backdrop="static" show={isOpen}>
        <SignUpForm />
        <Button onClick={() => handleToggle(false)}>Close</Button>
      </Modal>
    </>
  );
}

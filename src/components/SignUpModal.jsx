import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SignupForm from "./SignupForm";

export default function SignUpModal() {
  const [isOpen, setisOpen] = useState(false);

  const handleToggle = (bool) => {
    setisOpen(bool);
    console.log(bool);
  };

  return (
    <>
      <Button onClick={() => handleToggle(true)}>Signup</Button>
      <Modal backdrop="static" show={isOpen}>
        <SignupForm />
        <Button onClick={() => handleToggle(false)}>Close</Button>
      </Modal>
    </>
  );
}

import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateCurrentUser } from "firebase/auth";

const Register = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUserData(createdUser, name, photo);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const updateUserData = (user, name, photo) => {
    updateCurrentUser(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("info updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChecked = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Container className="mt-5 w-25 mx-auto">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter photo url"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleChecked}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Terms & Conditions</Link>
              </>
            }
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit" disabled={!accepted}>
            Register
          </Button>
        </div>
        <br />
        <Form.Text className="text-secondary">
          Already Have an Account?{" "}
          <Link to="/login" className="text-danger">
            Login
          </Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;

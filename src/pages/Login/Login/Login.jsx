import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";

  const handleLogin = (event) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
        setSuccess("User has been Logged In");
      })
      .catch((error) => {
        setError("Enter valid email & password");
      });
  };

  return (
    <Container className="mt-5 w-25 mx-auto">
      <h3>Please Login</h3>

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>

        <br />

        <Form.Text className="text-secondary">
          Don't Have an Account?{" "}
          <Link to="/register" className="text-danger">
            Register
          </Link>
        </Form.Text>

        <br />

        <Form.Text className="text-success">{success}</Form.Text>

        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </Container>
  );
};

export default Login;

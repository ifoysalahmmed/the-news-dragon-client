import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-3">
              <Link to="/category/0" className="text-decoration-none">
                Home
              </Link>
              <Link className="text-decoration-none">About</Link>
              <Link className="text-decoration-none">Career</Link>
            </Nav>
            <Nav>
              {user && (
                <Nav>
                  <FaUserCircle className="fs-1"></FaUserCircle>
                </Nav>
              )}
              <Nav className="ms-3">
                {user ? (
                  <Button variant="secondary" onClick={handleLogOut}>
                    Logout
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;

import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button
        className="mb-2 w-100 d-flex gap-2 justify-content-center align-items-center"
        variant="outline-primary"
      >
        <span>
          <FaGoogle />
        </span>
        <span> Login with Google</span>
      </Button>
      <Button
        className="mb-5 w-100 d-flex gap-2 justify-content-center align-items-center"
        variant="outline-secondary"
      >
        <FaGithub />
        Login with Github
      </Button>
      <div>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="text-primary" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="text-info" /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="text-danger" /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="position-relative">
        <img src={bg} alt="" />
        <div className="position-absolute top-0 px-3 py-5 mt-5 d-flex flex-column justify-content-center align-items-center">
          <p className="fs-3 text-white text-center">
            Create an Amazing Newspaper
          </p>
          <p className="text-white">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button className="w-auto" variant="danger">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;

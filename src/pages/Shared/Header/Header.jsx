import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="mt-5">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="inline-flex fw-semibold">
          <span>{moment().format("dddd, ")}</span>
          <span className="text-secondary">
            {moment().format("MMMM DD, YYYY")}
          </span>
        </p>
      </div>
    </Container>
  );
};

export default Header;

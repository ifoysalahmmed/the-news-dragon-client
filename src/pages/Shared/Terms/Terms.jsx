import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae qui
        nisi, veniam reiciendis commodi doloremque quaerat cumque id saepe neque
        labore, eligendi nemo ipsa consectetur, excepturi quas temporibus
        dolores aperiam autem. Rerum vel optio, eaque iusto blanditiis maiores
        dolor culpa totam sit quod eius adipisci, magni at eum neque.
        Consequatur?
      </p>
      <p>
        Go back to <Link to="/register">Registration</Link>
      </p>
    </Container>
  );
};

export default Terms;

import React from "react";
import "./Jumbotron.css";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";

function Jumbotron() {
  return (
    <Jumbo fluid className="jumbo">
      <div className="overlay-jumbo"></div>
    </Jumbo>
  );
}

export default Jumbotron;

import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>You will learn all about us here!</h2>
      <p>Checkout our <Link to="/">homepage</Link></p>
    </div>
  );
}

export default About;
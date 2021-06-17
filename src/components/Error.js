import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2>404</h2>
        <h3>Oops! Page not found!</h3>
        <p>Checkout our <Link to="/">homepage</Link></p>
    </div>
  );
}

export default Error;
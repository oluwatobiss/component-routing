import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h2>Welcome to our Homepage!</h2>
      <p>Learn more <Link to="/about">about us</Link></p>
    </div>
  );
}

export default App;
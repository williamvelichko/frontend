// hello first name
//links to add recipe
//
import React from "react";
import { Link } from "react-router-dom";

function details() {
  return (
    <div className="header_container">
      <h1>Family Secret Recipes</h1>
      <div className="navbar">
        <Link to="/signup">Sign Up</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}

export default details;

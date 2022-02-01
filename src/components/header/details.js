// hello first name
//links to add recipe
//
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function details() {
  return (
    <HeaderStyle>
      <h1>Family Secret Recipes</h1>
      <NavBar>
        <Link className="link" to="/signup">
          Sign Up
        </Link>
        <Link className="link" to="/logout">
          Logout
        </Link>
        <Link className="link" to="/addrecipe">
          Add Your Own Recipe
        </Link>
        <input
          type="text"
          id="search-bar"
          placeholder="Search Recipe by title or categories"
          name="search"
        />
      </NavBar>
    </HeaderStyle>
  );
}

export default details;

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h1 {
    margin-left: 20px;
  }
  background-color: #db7c26;
  position: fixed;
  font-family: "Lobster";
  box-shadow: 10px 5px 10px grey;
`;
const NavBar = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  font-size: 1.5rem;
  .link {
    text-decoration: none;
    color: black;
  }
`;

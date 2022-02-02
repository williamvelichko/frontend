// hello first name
//links to add recipe
//
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

function details() {
  const isloggedIn = localStorage.getItem("token");
  return (
    <HeaderStyle>
      <h1>Family Secret Recipes</h1>
      <NavBar>
        <Link className="link" to="/signup">
          Sign Up
        </Link>

        {isloggedIn && (
          <Link className="link" to="/logout">
            Logout
          </Link>
        )}
        {isloggedIn && (
          <Link className="link" to="/addrecipe">
            Add Your Own Recipe
          </Link>
        )}
        {isloggedIn && (
          <SearchBar>
            <input
              type="text"
              id="search-bar"
              placeholder="Search Recipe by title or categories"
              name="search"
            />
            <button>
              <SearchIcon />
            </button>
          </SearchBar>
        )}
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
const SearchBar = styled.div`
  display: flex;
  border: 2px solid black;
  background-color: #fffae5;
  padding: 5px;
  border-radius: 5px;
  input {
    background-color: #fffae5;
    border: none;
  }
  button {
    background-color: #fffae5;
    border: none;
  }
  button:hover {
    border: 1px solid black;
  }
`;

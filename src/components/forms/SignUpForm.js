import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const { push } = useHistory();

  const [userInfo, setUserInfo] = useState({
    // first_name: "",
    // last_name: "",
    //  email: "",
    username: "",
    password: "",
    // repeat_password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (
      // userInfo.first_name === "" ||
      // userInfo.last_name === "" ||
      // userInfo.email === "" ||
      userInfo.password === "" ||
      userInfo.username === ""
      // userInfo.repeat_password === ""
    ) {
      setError("ALL FIELDS ARE REQUIRED!");
      // } else if (userInfo.password !== userInfo.repeat_password) {
      //   setError("Password doesn't match");
    } else {
      axios
        .post(
          "https://back-end-recipe.herokuapp.com/api/auth/register",
          userInfo
        )
        .then((resp) => {
          setUserInfo(resp.data);
          axios
            .post(
              "https://back-end-recipe.herokuapp.com/api/auth/login",
              userInfo
            )
            .then((resp) => {
              localStorage.setItem("token", resp.data.token);
              push("/recipelisting");
            })
            .catch((err) => console.log(err));

          //localStorage.setItem("token", resp.data.token);
          push("/recipelisting");
        })
        .catch((err) => {
          console.log(err);
          setError("Account Already Exists");
        });
      //push("/");
    }
  };

  return (
    <SignUpWrapper>
      <Container>
        <SignUpForm>
          <form onSubmit={submit}>
            <Fields>
              <h1>Sign Up</h1>
              {/* <label>First Name : </label>
              <input
                type="text"
                name="first_name"
                value={userInfo.first_name}
                onChange={handleChange}
              />
              <label>Last Name : </label>
              <input
                type="text"
                name="last_name"
                value={userInfo.last_name}
                onChange={handleChange}
              />
              <label>Email : </label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              /> */}
              <label>username : </label>
              <input
                type="text"
                name="username"
                value={userInfo.username}
                onChange={handleChange}
              />
              <label>Password : </label>
              <input
                type="password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
              />
              {/* <label>Re-enter Password : </label>
              <input
                type="password"
                name="repeat_password"
                value={userInfo.repeat_password}
                onChange={handleChange}
              /> */}
              <h3>
                {" "}
                Already have an account
                <Link className="link" to="/login">
                  Login
                </Link>
              </h3>
              <button id="submit">Sign Up!</button>
              <p>{error}</p>
            </Fields>
          </form>
        </SignUpForm>
      </Container>
    </SignUpWrapper>
  );
};
export default Signup;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  width: 100%;
  //background-color: black;
`;
const SignUpForm = styled.div`
  width: 30%;
  margin: auto;
  //border: 4px solid #780116;
  border-radius: 5px;
  padding: 60px;
  background-color: #fffae5;
  margin-top: 40px;
  font-family: oxygen;
  margin-bottom: 50px;
  @media (max-width: 420px) {
    margin-top: 100px;
    width: 50%;
  }
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 420px) {
    button {
      text-align: center;
    }
  }
  button {
    width: 43%;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 5px 0em;
    padding: 5px;
    @media (max-width: 420px) {
      width: 70%;
    }
  }
  button:hover {
    background-color: #fff2b2;
    border: 3px solid palevioletred;
  }
  input {
    width: 75%;
    margin: 5px 0px;
  }
  .link {
    margin-bottom: 10px;
    // width: 50%;
    background: transparent;
    border-radius: 10%;
    color: black;

    padding: 3px;

    text-align: center;
    @media (max-width: 420px) {
      width: 50%;
    }
  }
  .link:hover {
    background-color: #fff2b2;
    border: 3px solid black;
  }
`;
const Container = styled.div`
  margin-top: 80px;
  opacity: 0.8;
`;

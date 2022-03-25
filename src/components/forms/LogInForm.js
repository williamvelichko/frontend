import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { push } = useHistory();

  const [credentials, setCredentials] = useState({
    //  email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    if (credentials.email === "" || credentials.password === "") {
      setErrors("ALL FIELDS REQUIRED!");
    } else {
      // localStorage.setItem('token')
      //push("/recipelisting");
      axios
        .post(
          " https://back-end-recipe.herokuapp.com/api/auth/login",
          credentials
        )
        .then((resp) => {
          localStorage.setItem("token", resp.data.token);
          push("/recipelisting");
        })
        .catch((err) => {
          console.log(err);
          setErrors("Wrong Username or Password");
        });
    }
  };

  return (
    <LoginWrapper>
      <Container>
        <LoginForm>
          <form onSubmit={login}>
            <FormBorder>
              <h1>Log in</h1>
              <label>Username : </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={credentials.username}
                onChange={handleChange}
              />
              <label>Password : </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={handleChange}
              />

              <h3>
                Create New Account{" "}
                <Link className="link" to="/signup">
                  Sign up
                </Link>
              </h3>

              <button>Log in</button>
              <p>{errors}</p>
            </FormBorder>
          </form>
        </LoginForm>
      </Container>
    </LoginWrapper>
  );
};

export default Login;
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  width: 100%;
  // background-color: black;
`;

const Container = styled.div`
  margin-top: 100px;
  opacity: 0.8;
`;

const FormBorder = styled.div`
  display: flex;
  flex-direction: column;
  button {
    width: 40%;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 5px 0em;
    padding: 0.25em 1em;
    @media (max-width: 420px) {
      width: 70%;
      font-size: 1rem;
    }
  }
  button:hover {
    background-color: #fff2b2;
    border: 3px solid palevioletred;
  }
  input {
    width: 75%;
    margin: 5px 0px;
    font-weight: 900;
  }
  .link {
    margin-bottom: 10px;
    width: 60%;
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
const LoginForm = styled.div`
  width: 30%;
  margin: auto;
  border-radius: 5px;
  padding: 84px;
  background-color: #fffae5;
  margin-top: 10px;
  font-family: oxygen;
  @media (max-width: 420px) {
    width: 35%;
  }
`;

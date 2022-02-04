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
              {/* <label>Email : </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={credentials.email}
                onChange={handleChange}
              /> */}
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
              <button>Log in</button>
              <Link className="link" to="/signup">
                Sign up
              </Link>
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
`;

const Container = styled.div`
  margin-top: 100px;
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
  }
  .link {
    display: flex;
    justify-content: center;
    appearance: button;
    text-decoration: none;
    color: initial;
    border-radius: 3px;
    border: 2px solid palevioletred;
    width: 38%;
    color: palevioletred;
    margin: 5px 0em;
    padding: 2px 1px 2px 2px;
    @media (max-width: 420px) {
      width: 64%;
    }
  }
  .link:hover {
    background-color: #fff2b2;
    border: 3px solid palevioletred;
  }
`;
const LoginForm = styled.div`
  width: 30%;
  margin: auto;
  border: 4px solid #780116;
  border-radius: 5px;
  padding: 84px;
  background-color: #fffae5;
  margin-top: 10px;
  font-family: oxygen;
  @media (max-width: 420px) {
    width: 35%;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

const Login = () => {

    const { push } = useHistory();

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value })
    }

    const login = e => {
        e.preventDefault();
        // localStorage.setItem('token')
        push('/home')
    }


return (
        <Container>
                <form onSubmit={login}> 
                    <FormBorder>
                    <h1>Log in</h1>
                    <label>Email : </label>
                    <input
                        type='text'
                        name='email'
                        placeholder="Enter your email"
                        value={credentials.email}
                        onChange={handleChange}
                    />
                    <label>Password : </label>
                    <input
                        type='password'
                        name='password'
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    <button>Log in</button>
                    <Link className="link" to ='/signup'>Sign up</Link>
                    </FormBorder>
                </form> 
        </Container>
)
}

export default Login;


const Container = styled.div`
  margin-top: 80px;
`;

const FormBorder =styled.div`
    display: flex;
    flex-direction: column;
    width: 27%;
    margin: auto;
    margin-top: 50px;
    border: 4px solid #780116;
    border-radius: 5px;
    padding: 30px;
    background-color: #fffae5;
    button {
        width: 26%;
        background: transparent;
        border-radius: 3px;
        border: 2px solid palevioletred;
        color: palevioletred;
        margin: 5px 0em;
        padding: 0.25em 1em;
    }
    button:hover {
        background-color: #fff2b2;
        border: 3px solid palevioletred;
    }
    .link {
        border-radius: 3px;
        border: 2px solid palevioletred;
        width: 25%;
        color: palevioletred;
        margin: 5px 0em;
        padding-left: 1px;
    }

`
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
    <div>
        <form onSubmit={login}>
            <label>Email</label>
            <input
                type='text'
                name='email'
                value={credentials.email}
                onChange={handleChange}
            />
            <input
                type='password'
                name='password'
                value={credentials.password}
                onChange={handleChange}
            />
            <button>Log in</button>
            <Link to ='/signup'>Sign up</Link>
        </form>
    </div>
)

}
export default Login;
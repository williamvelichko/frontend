import React, { useState }from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const Signup = () => {

    const [userInfo, setUserInfo] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        repeat_password:'',
    })

    const { push } = useHistory();

    const handleChange = e =>{
        setUserInfo({...userInfo, [e.target.name]: e.target.value })
    }

    const submit = e => {
        e.preventDefault();
        push('/')
    }

    return(
        <div>
            <form onSubmit={submit}>
                <label>First Name</label>
                <input
                    type='text'
                    name="first_name"
                    value={userInfo.first_name}
                    onChange={handleChange}
                />
                <label>Last Name</label>
                <input
                    type='text'
                    name='last_name'
                    value={userInfo.last_name}
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type='email'
                    name='email'
                    value={userInfo.email}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={userInfo.password}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='repeat_password'
                    value={userInfo.password}
                    onChange={handleChange}
                />
                <button>Sign Up!</button>
            </form>
        </div>
    )
}
 export default Signup;
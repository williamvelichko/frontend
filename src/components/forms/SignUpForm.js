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
            <SignUpWrapper>
                <form onSubmit={submit}>
                <SignUpForm>
                    <h1>Sign Up</h1>
                    <label>First Name : </label>
                    <input
                        type='text'
                        name="first_name"
                        value={userInfo.first_name}
                        onChange={handleChange}
                    />
                    <label>Last Name : </label>
                    <input
                        type='text'
                        name='last_name'
                        value={userInfo.last_name}
                        onChange={handleChange}
                    />
                    <label>Email : </label>
                    <input
                        type='email'
                        name='email'
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                    <label>Password : </label>
                    <input
                        type='password'
                        name='password'
                        value={userInfo.password}
                        onChange={handleChange}
                    />
                    <label>Re-enter Password : </label>
                    <input
                        type='password'
                        name='repeat_password'
                        value={userInfo.password}
                        onChange={handleChange}
                    />
                    <button>Sign Up!</button>
                </SignUpForm>
                </form>
            </SignUpWrapper>
        </div>
    )
}
 export default Signup;

const SignUpWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const SignUpForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 130%;
    margin: auto;
    margin-top: 50px;
    border: 4px solid #780116;
    border-radius: 5px;
    padding: 30px;
    background-color: #fffae5;
    margin-bottom: 20px;
    button {
        width: 40%;
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
    input {
       width: 75%;
    }
    
`


import React, { useRef } from 'react'
import { http } from '../axios';

import '../index.css'
import { useNavigate , Link } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleRegister(e) {
        e.preventDefault();
        let user = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        http.post("/auth/signup", user, {
            headers: {
                'Content-Type': "application/json"
            }
        })
            .then(response => {
                if (response.status === 200) {
                    navigate('/login');
                }
            })
            .catch(error => {
                console.log(error);
                
                alert(error.message);
            })
            .finally(() => {
                usernameRef.current.value = '';
                emailRef.current.value = '';
                passwordRef.current.value = '';
            });
    }

    return (
        <div className="container">
            <form onSubmit={handleRegister}>
                <input ref={usernameRef} type="text" placeholder='Enter username' />
                <input ref={emailRef} type="email" placeholder='Enter email' />
                <input ref={passwordRef} type="password" placeholder='Enter password' />
                <button type="submit">Register</button>
            </form>
            <h3><Link to='/login'>Login</Link></h3>
        </div>
    );
}

export default Register
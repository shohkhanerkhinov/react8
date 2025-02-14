import React, { useRef } from 'react'
import { http } from '../axios';

import '../index.css'
import { useNavigate , Link } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();

    function handleRegister(e) {
        e.preventDefault();
        let user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };

        http.post("/auth/register", user, {
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
                alert(error.message);
            })
            .finally(() => {
                usernameRef.current.value = '';
                passwordRef.current.value = '';
            });
    }

    return (
        <div className="container">
            <form onSubmit={handleRegister}>
                <input ref={usernameRef} type="text" placeholder='Enter username' />
                <input ref={passwordRef} type="password" placeholder='Enter password' />
                <button type="submit">Register</button>
            </form>
            <h3><Link to='/login'>Login</Link></h3>
        </div>
    );
}

export default Register
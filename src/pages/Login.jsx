import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { http } from '../axios'; // Axios instance

function Login({ setToken }) {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  async function handleLogin(e) {
    e.preventDefault();

    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await http.post('/auth/signin', user, {
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', response.data.accessToken);
        setToken(response.data.accessToken);
        navigate('/');
      }
    } 
    catch (error) {
      alert(error.response?.data?.message);
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <input ref={usernameRef} type="text" placeholder="Enter username" required />
        <input ref={passwordRef} type="password" placeholder="Enter password" required />
        <button type="submit">Login</button>
      </form>
      <p>Registratsa qiling <Link to="/register">Register</Link></p>
    </div>
  );
}

export default Login;

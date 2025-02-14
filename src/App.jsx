import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && location.pathname !== '/register') {
      navigate('/login');
    }
  }, [token]);

  return (
    <div>
      <Routes>
        <Route path='/' element={token ? <Home /> : <Register></Register>}></Route>
        <Route path='/about' element={token ? <About /> : <Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login setToken={setToken} />}></Route>
      </Routes>
    </div>
  );
}

export default App;

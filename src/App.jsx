import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Abaut from './pages/Abaut'
import Login from './pages/Login'
import Register from './pages/Register'

import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/about' element = {<Abaut></Abaut>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
        <Route path='/register' element = {<Register></Register>}></Route>
      </Routes>
    </div>
  )
}

export default App
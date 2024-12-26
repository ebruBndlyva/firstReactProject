import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';

function App() {


  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path='/products'>
          <Route index element={<Products />}></Route>
          <Route path=':id' element={<Detail />}></Route>
        </Route>


        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  )
}

export default App

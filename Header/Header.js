import React, {  useEffect } from 'react';
import './header.css'
import Aos from 'aos'
import {Link } from "react-router-dom"

import 'aos/dist/aos.css'
export default function Header() {
    useEffect(() => {
        Aos.init({
            duration :2000
        })
            }, []);
    return (
        <>
        <div className='header'>
            <h2 data-aos='fade-right'> First Choice Restaurant</h2>
        <img data-aos='fade-left' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIhhxElDTwf0oMB7BFNWRU5-IsYdH3jlrZ3IZxgnUuPsB-MYm4zYIh2uq55eums169xY&usqp=CAU' />
    <div className='nav'> <ul>
  <li><Link to='/'>Home</Link></li>
  <li><Link to="/menu">Menu</Link></li>
  <li><Link to="/contact">Contact Us</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/hours">Opening hours</Link></li>
<li id='gmail'><a href='mailto:Clearbusiness.adrianvenoin@gmail.com'>Clearbusiness.adrianvenoin@gmail.com</a></li>
</ul>
</div>
        </div>
        <nav id='nav' class="navbar navbar-expand-lg navbar-light bg-dark">
       <Link to='/'> <img data-aos='fade-left' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIhhxElDTwf0oMB7BFNWRU5-IsYdH3jlrZ3IZxgnUuPsB-MYm4zYIh2uq55eums169xY&usqp=CAU' /></Link>
  <h style={{marginLeft : '5px'}} class="navbar-brand text-warning"> First Choice Restaurant</h>
  <button class="navbar-toggler bg-light float-left " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link style={{marginRight : '100px'}} class="nav-link text-light" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link style={{marginRight : '100px'}} class="nav-link text-light" to="/menu">Menu</Link>
      </li>
      <li class="nav-item">
        <Link style={{marginRight : '100px'}} class="nav-link text-light" to="/contact">Contact Us</Link>
      </li>

      <li class="nav-item">
        <Link style={{marginRight : '100px'}} class="nav-link text-light" to="/about">About Us</Link>
      </li>
      <li>
          <Link style={{marginRight : '100px'}} class="nav-link text-light"  to="/hours">Opening hours</Link>
          </li>

    </ul>
  </div>
</nav>
    </>
    )
}

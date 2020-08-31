import React from "react";
import "./Navbar2.css";
import {Link} from 'react-router-dom';
import search from '../../../assets/search.png';
import technology from '../../../assets/technology.png';
import support from '../../../assets/support.png';
import logo2 from '../../../assets/logo2.png';

export default ({ close }) => (
  <div className="navigator">
    <div className="menu">
      <ul>
        <Link to ='/' style={{ textDecoration: 'none' }}>
          <li onClick={close}>Home</li>
        </Link>
        <Link to ='/about' style={{ textDecoration: 'none' }}>
          <li onClick={close}>About Us</li>
        </Link>
        <Link to ='/services' style={{ textDecoration: 'none' }}>
          <li onClick={close}>Services</li>
        </Link>
        <Link to ='/contact' style={{ textDecoration: 'none' }}>
          <li onClick={close}>Contact Us</li>
        </Link>
      </ul>
    </div>
    <img src={search} className="search" />
      <img src={technology} className="technology" />
      <img src={support} className="support" />
      <img src={logo2} className="floater" />
  </div>
);
 
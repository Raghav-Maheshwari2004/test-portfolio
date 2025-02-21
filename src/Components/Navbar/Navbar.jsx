import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
   
  return (
      <div>
        <nav>
          {/* <img src={} alt="" /> */}
        <ul >
        <li> <Link to="/">Home</Link> </li>
        <li> <a href="#about">About Me</a> </li>
        <li> <a href="#skill">Skills</a> </li>
                <li> <a href=""  download>Resume</a></li>
                <li> <a href="">Contact info</a></li>
                            </ul>
        </nav>
      
      </div>
      
  )
}

export default Navbar


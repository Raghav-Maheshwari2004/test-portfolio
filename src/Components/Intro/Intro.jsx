import React, { useEffect, useRef } from "react";
import assets from "../../assets/assests";
import Typed from "typed.js";
import './Intro.css'
const Intro = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer",  "AI Enthusiast"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);
   
  return (
    <div>
      <div className='header-container'>
      <div className='header-text left'>
        <h1>Hey, I am Raghav Maheshwari </h1>
        <h1>I'm  <span ref={typedElement}/></h1>
        <p className="intro-links-container">
  <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
    <img className="intro-links" src={assets.git} alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
    <img className="intro-links" src={assets.linked} alt="LinkedIn" />
  </a>
</p>

      </div>
      
      </div>
      </div>
      
      
  )
}

export default Intro

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './About.css';
import assets from '../../assets/assests';

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div id="about" className="container">
      <h1>About Me</h1>
      
      
      <div className="about-container">
        
        
        {/* <div className="about-left">
          <img src={assets.photo} alt="Your Photo" />
        </div> */}

        
        <div className="about-right">
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              I am a passionate Computer Science student currently pursuing my B.Tech. 
              I have a strong interest in software development, web technologies, and cloud computing.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="education">
            <h2>Education</h2>
            <div className="timeline">
              <div className="timeline-item">
                <h3>B.Tech in Computer Science</h3>
                <small>Vellore Institute of Technology(2022 - 2026)</small>
                <p>Currently pursuing a B.Tech degree in Computer Science at VIT, Vellore, with a keen interest in Web Development and Artificial Intelligence.</p>
              </div>
              <div className="timeline-item">
                <h3>12th Grade</h3>
                <small>(2022)</small>
                <p>Graduated 12th Grade in 2022, specializing in Physics, Chemistry, and Mathematics, securing 82%.</p>
              </div>
              <div className="timeline-item">
                <h3>10th Grade</h3>
                <small>(2020 )</small>
                <p>Completed 10th Grade in 2020 with a focus on Mathematics and Science, achieving 88.88%.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div id='skill' className="tabs">
        {["skills", "experience", "certifications"].map((tab) => (
          <p key={tab} className={`tab ${activeTab === tab ? "active" : ""}`} onClick={() => setActiveTab(tab)}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </p>
        ))}
      </div>

      {/* Skills Section */}
      {activeTab === "skills" && (
  <div  className="content">
    <ul>
      <li>
        <span className='heading'>Web Development</span>

        <div className="skills-wrapper">
          {/* Frontend Section */}
          <div className="frontend">
            <p>Frontend</p>
            <div className="skills">
              <div className="skill-item">
                <img src={assets.HTML} alt="HTML" />
                <span className="tooltip">HTML</span>
              </div>
              <div className="skill-item">
                <img src={assets.CSS} alt="CSS" />
                <span className="tooltip">CSS</span>
              </div>
              <div className="skill-item">
                <img src={assets.React} alt="React" />
                <span className="tooltip">React</span>
              </div>
            </div>
          </div>

          {/* Backend Section */}
          <div className="backend">
            <p>Backend</p>
            <div className="skills">
              <div className="skill-item">
                <img src={assets.node} alt="Node.js" />
                <span className="tooltip">Node.js</span>
              </div>
            </div>
          </div>
          <div className="database">
          <p>Databases</p>
          <div className="skills">
            <div className="skill-item">
              <img src={assets.mongo} alt="MongoDB" />
              <span className="tooltip">MongoDB</span>
            </div>
            <div className="skill-item">
              <img src={assets.sql} alt="MySQL" />
              <span className="tooltip">MySQL</span>
            </div>
          </div>
          </div>
        </div>
        {/* Coding Languages */}
        <span className='heading'>Coding Languages</span>
        <div className="skills">
          <div className="skill-item">
            <img src={assets.java} alt="Java" />
            <span className="tooltip">Java</span>
          </div>
          <div className="skill-item">
            <img src={assets.C} alt="C" />
            <span className="tooltip">C</span>
          </div>
          <div className="skill-item">
            <img src={assets.CPP} alt="C++" />
            <span className="tooltip">C++</span>
          </div>
          <div className="skill-item">
            <img src={assets.JS} alt="JavaScript" />
            <span className="tooltip">JavaScript</span>
          </div>
        </div>
      </li>

      {/* Cloud Computing Section */}
      <li>
        <span className="heading">Cloud Computing</span>
        <div className="skills">
          <div className="skill-item">
            <img className="aws" src={assets.AWS} alt="AWS" />
            <span className="tooltip">AWS</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
)}
      {/* Experience Section */}
      {activeTab === "experience" && (
        <div className="content">
          <div className="exp">
            <h2><img className='company' src={assets.peping} alt="" />Peping</h2>
            <small>2023 June-July</small>
            <p>Worked on various projects, gaining hands-on experience in software development.</p>
          </div>
        </div>
      )}

      {/* Certifications Section */}
      {activeTab === "certifications" && (
  <div className="content">
    <div className="certificates">
      <div className="cert">
        <img src={assets.cf1} alt="Certificate 1" />
        <a href={assets.AWScertificate} download className="download-btn">Download</a>
      </div>
      <div className="cert">
        <img src={assets.cf2} alt="Certificate 2" />
        <a href={assets.AIcertificate} download className="download-btn">Download</a>
      </div>
      <div className="cert">
        <img src={assets.cf3} alt="Certificate 3" />
        <a href={assets.GenerativeAIcertificate} download className="download-btn">Download</a>
      </div>
      
    </div>
  </div>
)}
<div>
  <h1>My Works</h1>
  <a href="https://talksy-wxza.vercel.app">
    <img className="works" src={assets.talksy2} alt="Talksy Project" />
    </a>
</div>
    </div>
  );
};

export default About;

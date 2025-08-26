import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-img">
            <img src="/media/WhatsApp Image 2025-08-17 at 10.09.04 AM.jpeg" alt="Profile Picture" />
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              As a highly motivated and skilled professional, I have gained valuable experience in both Full Stack Development and Graphic Design
              during my internships. I am proficient in working with the MERN stack (MongoDB, Express.js, React, Node.js) to build robust web
              applications, as well as developing training modules and conducting problem-solving tasks related to system functionality.
            </p>
            <p>
              Additionally, I have a strong foundation in Docker and Containerization, and am passionate about applying innovative solutions to real-world
              challenges and to explore all kinds of new technologies.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <span>Name:</span>
                <span>Arindam Ghosh</span>
              </div>
              <div className="info-item">
                <span>Email:</span>
                <span>ghosharindam2822@gmail.com</span>
              </div>
              <div className="info-item">
                <span>Location:</span>
                <span>India</span>
              </div>
              <div className="info-item">
                <span>Availability:</span>
                <span>Available for freelance</span>
              </div>
            </div>
            <a href="/media/Arindam___Ghosh___Resume__1_.pdf" download className="btn primary-btn">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
  const typedTextRef = useRef(null);
  
  useEffect(() => {
    if (typedTextRef.current) {
      const typed = new Typed(typedTextRef.current, {
        strings: ['NodeJS Developer', 'React Developer', 'Full Stack Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
      });
      
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Arindam Ghosh</span></h1>
          <h2>I'm a <span className="typed-text" ref={typedTextRef}></span></h2>
          <p>Welcome to my portfolio website. I create amazing digital experiences.</p>
          <div className="cta-buttons">
            <Link 
              to="projects" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="btn primary-btn"
            >
              View My Work
            </Link>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="btn secondary-btn"
            >
              Contact Me
            </Link>
          </div>
          <div className="social-icons">
            <a href="https://github.com/Arindamghosh32" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arindam-ghosh-bb4856272/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
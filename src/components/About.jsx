import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // for MongoDB icon
import jfLogo from '../assets/jfLogo.png';

const About = () => {
  const skillRefs = useRef([]);
  const aboutSectionRef = useRef(null); // Ref for the entire about section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            skillRefs.current.forEach((skill, index) => {
              skill.style.setProperty('--animation-delay', `${index * 300}ms`);
              
              setTimeout(() => {
                skill.classList.add('skills__item-fade-in'); // Add fade-in class
              }, index * 300); // Delay each item by 300ms
            });

            // Optionally disconnect observer after animation is triggered
            observer.disconnect();
          }
        });
      }, 
      {
        root: null, // Sets the viewport as the root
        threshold: 0.1 // Triggers when 10% of the section is visible
      }
    );

    // Observe the "About" section
    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  const skillIcons = {
    HTML5: faHtml5,
    CSS3: faCss3Alt,
    JavaScript: faJs,
    React: faReact,
    Node: faNodeJs,
    MongoDB: faDatabase,
    Git: faGitAlt,
    GitHub: faGithub,
  };

  return (
    <section id="about" className="about-section" ref={aboutSectionRef}>
      <h1 className='aboutHeader'>About</h1>
      
      <div className="about-container">
        {/* Left Side: Image and Text */}
        <div className="logo-text-container">
          <img src={jfLogo} alt="About Me" className="jfLogo" />
          <p className="aboutText">
            When I'm not in front of a screen, you can find me exploring new workout routines, catching up on the latest tech trends, or enjoying the vibrant community here in Tampa, FL. I’m always on the lookout for new opportunities to collaborate, learn, and grow in this ever-evolving field.
          </p>
        </div>

        {/* Right Side: Skills */}
        <div className="skills-container">
          <div className="skills__row">
            {['HTML5', 'CSS3', 'JavaScript', 'React'].map((skill, index) => (
              <div 
                className="skills__item" 
                ref={el => skillRefs.current[index] = el} 
                key={skill}
              >
                <FontAwesomeIcon icon={skillIcons[skill]} className="skill-icon" />
                <span className="skill-label">{skill}</span>
              </div>
            ))}
          </div>
          
          <div className="skills__row">
            {['Node.js', 'MongoDB', 'Git', 'GitHub'].map((skill, index) => (
              <div 
                className="skills__item" 
                ref={el => skillRefs.current[index + 4] = el} 
                key={skill}
              >
                <FontAwesomeIcon icon={skillIcons[skill.split('.')[0]]} className="skill-icon" />
                <span className="skill-label">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

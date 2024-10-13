import React, { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Import icons

const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // Update active section
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      let currentSection = '';

      const footer = document.querySelector('footer');
      const footerRect = footer.getBoundingClientRect();
      const footerInView = footerRect.top < window.innerHeight;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section;
          }
        }
      });

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        if (contactRect.top <= 0) {
          setIsExpanded(true);
        } else {
          setIsExpanded(false);
        }
      }

      if (!footerInView) {
        setActiveSection(currentSection);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isExpanded ? 'navbar-expanded' : ''}`}>
      <ul className="navbar-links">
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a onClick={() => handleScrollToSection('home')}>
            <FaHome />
          </a>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <a onClick={() => handleScrollToSection('about')}>
            <FaInfoCircle />
          </a>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <a onClick={() => handleScrollToSection('projects')}>
            <FaProjectDiagram />
          </a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a onClick={() => handleScrollToSection('contact')}>
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

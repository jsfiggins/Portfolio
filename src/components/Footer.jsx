import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Jaseane Figgins. All Rights Reserved.</p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/figginsjaseane/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/jsfiggins" target="_blank" rel="noopener noreferrer" className="github-icon">
                    <FaGithub size={30} />
                </a>
                <div className="aurora"></div>
                
            </div>
        </footer>
    );
};

export default Footer;

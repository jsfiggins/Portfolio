import React, { useState } from 'react';
import trackerLogin from '../assets/images/trackerLogin.png';
import trackerForm from '../assets/images/trackerForm.png';
import trackerHome from '../assets/images/trackerHome.png';
import trackerExample from '../assets/images/trackerExample.png';
import spotMe from '../assets/images/spotMe.png';
import exercises from '../assets/images/exercises.png';
import bodyPart from '../assets/images/bodyPart.png';
import nirvanaLogin from '../assets/images/nirvanaLogin.png';
import nirvanaPublic from '../assets/images/nirvanaPublic.png';
import nirvanaHome from '../assets/images/nirvanaHome.png';

const Projects = () => {
  const projects = [
    {
      title: 'GainzTracker',
      images: [ 
        trackerLogin,
        trackerHome,
        trackerForm,
        trackerExample
      ],
      description: "Full-stack MERN application for tracking workouts, allowing users to log exercises, monitor progress, and view past entries. Implements JWT-based authentication to ensure secure, personalized data management.",
      tech: 'React, Node, MongoDB, JWT, Git, Github, Express',
      githubUrl: "https://github.com/jsfiggins/gainzTracker",
      liveUrl: "https://gainztracker-lbx3.onrender.com",
    },
    {
      title: 'SpotMe',
      images: [
        spotMe,
        exercises,
        bodyPart
      ],
      description: "Front-end application enabling users to explore exercises targeting specific body parts.",
      tech: "Built using React, RESTful APIs, Axios",
      githubUrl: 'https://github.com/jsfiggins/spotMe',
      liveUrl: 'https://spotme-diph.onrender.com',
    },
    {
      title: "Nirvana Lifeline",
      images: [
        nirvanaLogin,
        nirvanaHome,
        nirvanaPublic
      ],
      description: "Full-stack application designed to track and manage issues. Currently in production.",
      tech: "React, Node, MongoDB, JWT, Git, Github, Express"
    }
  ];

  return (
    <section id='projects'>
      <h1 className='projectsHeader'>Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} reverseLayout={index % 2 !== 0} index={index} />
      ))}
    </section>
  );
};

const ProjectCard = ({ project, reverseLayout, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`project-card ${reverseLayout ? 'reverse' : ''}`}>
      {/* Background Elements */}
      <div className={`project-background project-bg-${index % 2 === 0 ? 'even' : 'odd'}`}></div>

      <div className='project-image-slider'>
        <button className='prev-button' onClick={prevImage}>❮</button>
        <img 
          src={project.images[currentImageIndex]} 
          alt={project.title} 
          className='project-image' 
        />
        <button className='next-button' onClick={nextImage}>❯</button>
      </div>
      <div className='project-info'>
        <h3 className='project-title'>{project.title}</h3>
        <p className='project-description'>{project.description}</p>
        <p className='project-tech'>Technologies: {project.tech}</p>

        {/* Conditionally render buttons or development message */}
        {project.githubUrl && project.liveUrl ? (
          <div className="project-links">
            <button>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="learn-more-link">Learn More (GitHub)</a>
            </button>
            <button>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="learn-more-link">View Live</a>
            </button>
            <p className="loading-note">Note: The live version may take a moment to load initially.</p>
          </div>
        ) : (
          <p className="project-development-note">This project is currently in development. Stay tuned for updates!</p>
        )}
      </div>
    </div>
  );
};


export default Projects;

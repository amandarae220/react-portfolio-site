import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 'retirement-calculator',
      title: 'Retirement Calculator',
      description: 'An interactive calculator that computes and visualizes the power of compounding interest over time.',
    },
    {
      id: 'interactive-resume',
      title: 'Interactive Resume',
      description: 'A web based visualization of resume information in a more interactive format using D3.js.',
    },
    {
      id: 'investment-app',
      title: 'Investment App',
      description: 'A high fidelity prototype for a financial investing app that provides guided learning for users to choose from.',
    }
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="projectButtonContainer">
            <Link to={`/portfolio/${project.id}`} className="project-link">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

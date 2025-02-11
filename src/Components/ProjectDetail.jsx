import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams(); // Get the projectId from the URL
  const navigate = useNavigate();

  // Here you can fetch the project data dynamically, but for now, let's hardcode some examples.
  const projects = [
    {
      id: 'retirement-calculator',
      title: 'Retirement Calculator',
      description: 'An interactive calculator that computes and visualizes the power of compounding interest over time.',
      details: 'This project showcases a React app built using functional components and React Router for navigation.',
      technologies: 'React, CSS, JavaScript, HTML'
    },
    {
      id: 'interactive-resume',
      title: 'Interactive Resume',
      description: 'A web based visualization of resume information in a more interactive format using D3.js.',
      details: 'This project includes a fully functioning e-commerce platform with features like user authentication and payment gateway.',
      technologies: 'React, Redux, Firebase, Stripe'
    },
    {
      id: 'investment-app',
      title: 'Investment App',
      description: 'A high fidelity prototype for a financial investing app that provides guided learning for users to choose from.',
      details: 'This project includes a fully functioning e-commerce platform with features like user authentication and payment gateway.',
      technologies: 'React, Redux, Firebase, Stripe'
    },
  ];

  // Find the project by id
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <section className="project-detail">
      <h2>{project.title}</h2>
      <p><strong>Description:</strong> {project.description}</p>
      <p><strong>Details:</strong> {project.details}</p>
      <p><strong>Technologies Used:</strong> {project.technologies}</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </section>
  );
};

export default ProjectDetail;
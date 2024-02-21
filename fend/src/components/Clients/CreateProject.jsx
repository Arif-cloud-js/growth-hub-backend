import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectForm from './ProjectForm';
import ProjectDetails from './ProjectDetails';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';

const CreateProject = ({ username }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Fetch projects on component mount
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleCreateProject = () => {
    // After creating a project, fetch the updated list of projects
    fetchProjects();
  };

  const handleProjectClick = (projectId) => {
    const project = projects.find((p) => p._id === projectId);
    setSelectedProject(project);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Freelancing Platform</h1>

      <div style={styles.rowContainer}>
        <div style={styles.column}>
          <div style={styles.projectsContainer}>
            {projects.map((project) => (
              <div key={project._id} onClick={() => handleProjectClick(project._id)} style={styles.projectItem}>
                <h3 style={styles.projectTitle}>Post by: <b>{username}</b></h3>
                <h3 style={styles.projectTitle}>Title : {project.title}</h3>
                <p style={styles.projectDetail}>Payment Amount: ${project.paymentamount}</p>
                <p style={styles.projectDetail}>Payment Method: {project.paymentmethod}</p>
                <p style={styles.projectDetail}>Creation Time: {new Date(project.creationTime).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div style={styles.sidebar}>
          <ProjectDetails project={selectedProject} username={username} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '2px solid #0C7E6E',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(29, 13, 13, 0.2)',
     width:'650px'
  },
  header: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '20px',
    color: '#0C7E6E', // Adjusted color for better visibility
  },
  rowContainer: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  column: {
    width: '100%', // Adjusted width to make it full width
  },
  sidebar: {
    position: 'fixed',
    top: '150px',
    right: '50px',
    width: '20%', // Adjusted background color for better readability
    padding: '20px',
    border: '2px solid #0C7E6E',
    borderTop:'none',
    borderRight:'none',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(29, 13, 13, 0.2)',
    minHeight: '200px',
    height: '100%', flexDirection: 'row-reverse', maxHeight: '390px', overflowY: 'auto'
  },
  sidebarTitle: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#3498db', // Adjusted color for better visibility
  },
  projectsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '100%', flexDirection: 'row-reverse', maxHeight: '390px', overflowY: 'auto'
  },
  projectItem: {
    width: '100%', // Adjusted width to make it full width
    padding: '15px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    transition: 'box-shadow 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    ':hover': {
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    },
  },
  projectTitle: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#333',
  },
  projectDetail: {
    margin: '5px 0',
    color: '#555',
  },
};

export default CreateProject;

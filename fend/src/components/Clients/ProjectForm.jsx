// ProjectForm.jsx
import './client.css'; // Import your CSS file
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';
const ProjectForm = ({ onCreateProject ,username}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState('');
  const [paymentAmount, setPaymentAmount] = useState(0); // Initialize with 0, adjust as needed
  const [paymentMethod, setPaymentMethod] = useState('');
  const [creationTime, setCreationTime] = useState('');

  useEffect(() => {
    // Fetch the list of freelancers when the component mounts
    const fetchFreelancers = async () => {
      try {
        const response = await axios.get('/api/freelancers');
        // Assuming 'setFreelancers' is used in your original code, but not needed in this modified version
      } catch (error) {
        console.error('Error fetching freelancers:', error);
      }
    };

    fetchFreelancers();
  }, []);

  const fetchUserInfo = async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      return response.data; // Assuming the user data is returned from the API
    } catch (error) {
      console.error(`Error fetching user information for user ${userId}:`, error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get user information for the client
  

      // Get the current timestampS
      const currentTime = new Date().toISOString();

      // Send a request to create a new project
      const response = await axios.post('/createprojects', {
        title,
        description,
        clientName:username,
        paymentamount: paymentAmount,
        paymentmethod: paymentMethod,
        creationTime: currentTime,
      });

      // Handle the response as needed
      console.log('Project created:', response.data);

      // Trigger a callback to notify the parent component that a project has been created
      onCreateProject();
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div id="projectFormContainer"> <h2>Create a New Project</h2>
      <div  id="projectForm">
        <label className="projectLabel">Title:</label>
        <input className="projectInput" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label className="projectLabel">Payment Amount:</label>
        <input
          className="projectInput"
          type="number"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(e.target.value)}
          required
        />
         <label className="projectLabel">Payment Method:</label>
        <input
          className="projectInput"
          type="text"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        />  <label className="projectLabel">Description:</label>
        <textarea className="projectTextarea" value={description} onChange={(e) => setDescription(e.target.value)} required />

       

       

<MDBBtn size='lg'  color="grey" className="grey accent-4" onClick={handleSubmit}>Post</MDBBtn>
      </div>
    </div>
  );
};

export default ProjectForm;

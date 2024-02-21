// ProjectDetails.js
import { Link } from 'react-router-dom';
import React, { useState ,useEffect} from 'react';
import axios from 'axios';
const mongoose = require('mongoose');

const ProjectDetails = ({ project, username }) => {
  const [messageContent, setMessageContent] = useState('');
  const [projects, setProject] = useState(/* Initial project state */);



  

  useEffect(() => {
    // Fetch project details when the component mounts
    fetchProjectDetails();
  }, []); // The empty dependency array ensures that this effect runs only once on mount



  const handleProposalAction = async (proposalId, action,reciever) => {
    try {
      const response = await axios.post(`/api/proposals/${proposalId}/action`, {
        action, // 'accept' or 'reject'
      });

      console.log('Proposal action completed:', response.data);

      // Assuming you have a notifications API, send a notification to the freelancer
      if (action === 'accept') {
        sendNotification(proposalId,reciever);
      }

      // Fetch updated project details after the proposal action
      fetchProjectDetails();
    } catch (error) {
      console.error('Error performing proposal action:', error);
    }
  };

  const sendNotification = async (proposalId,reciever) => {
    try {
      const response = await axios.post('/send/notification', {
        username: username,
        notificationmessage: 'Your proposal has been accepted for the project.',
        projectid:project._id,
        proposalId,
        reciever
      });

      alert('Notification sent to user');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  const fetchProjectDetails = async () => {
    try {
      if (!mongoose.Types.ObjectId.isValid(project._id)) {
        console.error('Invalid ObjectId:', project._id);
        return; // or handle the error as needed
      }
  
      const response = await axios.get(`/api/projects/${project._id}`);
      setProject(response.data);
    } catch (error) {
      console.error('Error fetching updated project details:', error);
    }
  };
  

  return (
    <div>
    <strong>{project.title}</strong>
    <p>{project.description}</p>
    <strong>Total Proposals: {project.proposals.length}</strong>
    <ul>
      {project.proposals.map((proposal, index) => (
        <li key={index}>
          <Link to={`/user/user-profile/${proposal.PSId}`}>{proposal.username}</Link>
          <p className='text-muted'>{proposal.detail}</p>
          <span className='text-muted'>{proposal.completionTime}   {proposal.amount}$</span><span></span>
        

        </li>
      ))}
    </ul>
   
     

    </div>
  );
        }

export default ProjectDetails;

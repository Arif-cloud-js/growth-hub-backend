import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProjectDetailComponent = ({ username }) => {
  const { projectId } = useParams();
  const [projectDetails, setProjectDetails] = useState(null);
  const [message, setMessage] = useState('');
  const [isMessageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`/project-details/${projectId}`);
        setProjectDetails(response.data.project);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectDetails();
  }, [projectId]);

  const handleSendMessage = async () => {
    try {
      // Send the message to the server
      await axios.post('/send-message', {
        sender: username,
        projectId,
        content: message,
      });

      // Set a flag to indicate that the message was sent
      setMessageSent(true);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Project Details</h2>
      <p>
        <strong>Project Title:</strong> {projectDetails.title}
      </p>
      <p>
        <strong>Project Description:</strong> {projectDetails.description}
      </p>
      <p>
        <strong>Project Amount:</strong> ${projectDetails.paymentamount}
      </p>

      {/* Message form */}
      <div style={{ marginTop: '20px' }}>
        <textarea
          style={{ width: '100%', minHeight: '100px', padding: '10px' }}
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          style={{
            backgroundColor: '#0C7E6E',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
          onClick={handleSendMessage}
        >
          Send Message
        </button>
        {isMessageSent && (
          <p style={{ color: '#0C7E6E', marginTop: '10px' }}>
            Message sent successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailComponent;

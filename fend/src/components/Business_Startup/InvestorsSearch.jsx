// In your React component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import '../Clients/fls.css'; // Import your CSS file

const InvestorsSearch = ({username}) => {
  const [freelancers, setFreelancers] = useState([]);
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);
  const [hourlyRate, setHourlyRate] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  

  useEffect(() => {
    // Fetch the list of freelancers
    fetchFreelancers();
  }, []);

  const fetchFreelancers = async () => {
    try {
      const response = await axios.get('/investors');
      // Ensure response.data is an array before setting it
      if (Array.isArray(response.data)) {
        setFreelancers(response.data);
      }
    } catch (error) {
      console.error('Error fetching freelancers:', error);
    }
  };

  const handleHireFreelancer = async () => {
  

    try {
      const response = await axios.post('/offer/investor', {
        offeredByUsername:username,
        userId: selectedFreelancer._id,
        offerprofit:hourlyRate,
        offerMessage:description,
        offerDuration:duration,
      });

       alert(response.data); // Log the response from the server

      // Handle success or show a notification to the user
    } catch (error) {
      console.error('Error hiring freelancer:', error);
      // Handle the error or show an error notification
    }
  };

  return (
    <div className="fls-container">
      <div className="fls-sidebar">
        <h2>Inveestors</h2>
        <ul className="fls-list">
          {freelancers.map((users) => (
            <li key={users._id} className="fls-item">
              <div>
                <strong>{users.username}</strong> <br/> 
                <strong>Skills</strong><br/>
                {users.skill1},{users.skill2},
                {users.skill3}, {users.skill4} <br/>
                <strong>Experience</strong><br/>
                {users.experience1}, {users.experience2} 
              </div>
              <button onClick={() => setSelectedFreelancer(users)}>Send Request</button>
            </li>
          ))}
        </ul>
      </div>

      {selectedFreelancer && (
        <div className="fls-main-content">
          <h3>{selectedFreelancer.username}</h3>
          <p>Description: <textarea value={description} onChange={(e) => setDescription(e.target.value)} /></p>
          <p>Duration: <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} /></p>
          <p>Monthly Profit $<input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} /></p>
          <button onClick={handleHireFreelancer}>Hire</button>
        </div>
      )}
    </div>
  );
};

export default  InvestorsSearch;

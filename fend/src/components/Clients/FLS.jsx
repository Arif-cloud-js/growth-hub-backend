// In your React component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './fls.css'; // Import your CSS file
import {Link} from "react-router-dom"
const FLS = ({ username }) => {
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
      const response = await axios.get('/freelancers');
      // Ensure response.data is an array before setting it
      if (Array.isArray(response.data)) {
        setFreelancers(response.data);
      }
    } catch (error) {
      console.error('Error fetching freelancers:', error);
    }
  };

  const handleHireFreelancer = async () => {
    if (!selectedFreelancer || !hourlyRate || !description || !duration) {
      // Handle error or show a notification
      return;
    }

    try {
      const response = await axios.post('/freelancer/hire', {
        hiredByUsername: username,
        userId: selectedFreelancer._id,
        hourlyPaid:hourlyRate,
        hiringMessage:description,
        hiringDuration:duration,
      });

      alert('Notification sent Successfully')
      setHourlyRate('');
      setDescription('');
      setDuration('');
      // Handle success or show a notification to the user
    } catch (error) {
      console.error('Error hiring freelancer:', error);
      // Handle the error or show an error notification
    }
  };

  return (
    <div className="fls-container">
      <div className="fls-sidebar" style={{ height: '100%', flexDirection: 'row-reverse', maxHeight: '390px', overflowY: 'auto' }}>
        <h2>Freelancers</h2>
        <ul className="fls-list">
          {freelancers.map((users) => (
            <li key={users._id} className="fls-item">
              <div>
                <strong>{users.username}</strong><br/>
                <strong>Skills:</strong> - {users.skill1},{users.skill2},{users.skill3},{users.skill4}
                <br/>
                <strong>Experience:</strong> - {users.experience1},{users.experience2}
              </div>
              <button className='btn btn-dark' onClick={() => setSelectedFreelancer(users)}>Hire</button>
            </li>
          ))}
        </ul>
      </div>

      {selectedFreelancer && (
        <div className="fls-main-content">
        <Link
        to={`/user/user-profile/${selectedFreelancer._id}`}
        className='text-dark text-decoration-none '
      >
        <h5>{selectedFreelancer.username}</h5>
      </Link>
          <p>Hourly Rate: $ <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} /></p>
          <p>Description: <textarea value={description} onChange={(e) => setDescription(e.target.value)} /></p>
          <p>Duration: <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} /></p>
          <button className='btn btn-dark'  onClick={handleHireFreelancer}>Hire</button>
        </div>
      )}
    </div>
  );
};

export default FLS;

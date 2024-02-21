// In your React component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Clients/fls.css'; // Import your CSS file
import {Link} from 'react-router-dom'
const FLS = ({ username }) => {
  const [freelancers, setFreelancers] = useState([]);
 

  useEffect(() => {
    // Fetch the list of freelancers
    fetchFreelancers();
  }, []);

  const fetchFreelancers = async () => {
    try {
      const response = await axios.get('/experts');
      // Ensure response.data is an array before setting it
      if (Array.isArray(response.data)) {
        setFreelancers(response.data);
      }
    } catch (error) {
      console.error('Error fetching freelancers:', error);
    }
  };



  return (
    <div className="fls-container" >
      <div className="fls-sidebar" style={{
      height: '100%',
      maxHeight: '400px',
      overflowY: 'auto',
    }}>
        <h2>Business Startups</h2>
        <ul className="fls-list">
          {freelancers.map((users) => (
            <li key={users._id} className="fls-item">
            <div>
                <strong>{users.username}</strong><br/>
                <strong>Skills:</strong> - {users.skill1},{users.skill2},{users.skill3},{users.skill4}
                <br/>
                <strong>Experience:</strong> - {users.experience1},{users.experience2}
              </div>
              <Link
            to={`/user/user-profile/${users._id}`}
            className='text-dark text-decoration-none '
          >
            <h5>See profile</h5>
          </Link>
            </li>
          ))}
        </ul>
      </div>


    </div>
  );
};

export default FLS;

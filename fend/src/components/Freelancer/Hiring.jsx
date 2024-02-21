// HiringComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Hiring = ({ username }) => {
  const [hiringData, setHiringData] = useState([]);

  useEffect(() => {
    const fetchHiringData = async () => {
      try {
        const response = await axios.get(`/hiring/${username}`);
        setHiringData(response.data.hiring);
      } catch (error) {
        console.error('Error fetching hiring data:', error);
      }
    };

    fetchHiringData();
  }, [username]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Hiring Information for {username}</h2>
      <ul className="list-group">
        {hiringData.map((hiringInfo, index) => (
          <li key={index} className="list-group-item">
            Hired by: 
            <Link to={`/user-profile/${hiringInfo.hiredByUsername}`} className="mb-2">
              <strong>{hiringInfo.hiredByUsername}</strong>
            </Link>
            <p className="mb-2">Duration: {hiringInfo.hiringDuration}</p>
            <p className="mb-2">Hourly Paid: ${hiringInfo.hourlyPaid}</p>
            <p className="mb-2">{hiringInfo.hiringMessage}</p> 
            {/* Add other hiring information fields */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hiring;

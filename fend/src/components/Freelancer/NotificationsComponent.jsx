import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NotificationsComponent = ({ username }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`/notifications/${username}`);
        setNotifications(response.data.notifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [username]);

  return (
    <div>
      <h2>Notifications {username}</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {/* Render your notification content here */}
            <p>{notification.notificationmessage}</p>

            {/* Link to another component with the project ID */}
            <Link to={`/project-details/${notification.projectid}`}>
              View Project Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsComponent;

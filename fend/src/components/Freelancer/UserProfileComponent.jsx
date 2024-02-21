import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useParams } from 'react-router-dom';
import './Jobs.css'; // Import the CSS file
import { MDBInput} from 'mdb-react-ui-kit';

const UserProfileComponent = ({username}) => {
  const { postedUserId } = useParams();
  const token = localStorage.getItem('token');
  const decodedToken = jwt_decode(token);
  const Id = decodedToken.userId;
  const [messageContent, setMessageContent] = useState('');
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
    
      try {
        const response = await axios.get(`/user/user-profile/${postedUserId}`);
        setUserProfile(response.data); // Assuming response.data is the user profile object
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [postedUserId]);

  if (!userProfile) {
    return <div className="loading">Loading...</div>;
  }
  const sendMessage = async () => {
    try {
      const response = await axios.post('/user/send-message', {
        sender:username,
        senderId:Id,
        receiverId:postedUserId,
        content: messageContent,
      });
        alert('Message sent successfully:', response.data.message);
      setMessageContent('');
    } catch (error) {
      alert('Error sending message:', error);
    }
  };

  return (
    <div className="user-profile-container">
      <h2 className="profile-heading">
        <h3 className='text-center'>{userProfile.username}</h3>
      </h2>
      <p className="profile-info text-center">Email: {userProfile.email}</p>
      <p className="profile-info"><strong>Role:</strong> {userProfile.role}</p>
      <p className="profile-info">
        <strong>Skills:</strong> 
        <ul>
          <li></li>
          <li> {userProfile.skill2}</li>
          <li> {userProfile.skill3}</li>
        </ul>
      </p>
      <p className="profile-info">
        <strong>Experiences:</strong>
        <ul>
          <li>
          {userProfile.experience1} 
       <li>{userProfile.experience1} 
        {userProfile.experience2}</li>
          </li>
        </ul>
      </p>
      <div className="msg">
      <MDBInput
        placeholder="Type your message..."
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
          required
      />
      <button className='customButton' onClick={sendMessage}>
        Send
      </button>
      </div>
    </div>
  );
};

export default UserProfileComponent;

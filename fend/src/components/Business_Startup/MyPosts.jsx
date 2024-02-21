import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { MDBIcon } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'
import './Other.css'
const MyPosts = () => {
  const [myIdeas, setMyIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const decodedToken = jwt_decode(token);
  const userId = decodedToken.userId;

  useEffect(() => {
    const fetchMyIdeas = async () => {
      try {
        const response = await axios.get(`/business/get/${userId}`);
        setMyIdeas(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    };

    fetchMyIdeas();
  }, [userId]);

  return (
    <div className="my-posts-container"style={{ height: '100%', flexDirection: 'row-reverse', maxHeight: '390px', overflowY: 'auto' }}>
      <h2 className="my-posts-title">My Ideas</h2>
      {loading ? (
        <p>Loading...</p>
      ) : myIdeas.length === 0 ? (
        <p>No ideas created by you.</p>
      ) : (
        <ul className="my-ideas-list">
          {[...myIdeas].reverse().map((idea) => (
            <li key={idea._id} className="my-idea-item">
              <h3 className="idea-category"><strong>Category :</strong>{idea.category}</h3>
              <p className="idea-market"><strong>Market : </strong>{idea.market}</p>
              <p className="idea-description"><strong>Description  </strong>{idea.shortdes}</p>
              <strong>Interests:</strong> 
              <div className="idea-interests">
               {idea.interests.map((interest, index) => (
                <div className="int"> 
                 <Link to={`/user/user-profile/${interest.senderId}`} >
                 <MDBIcon icon='user' size='2xl'></MDBIcon>
                </Link>
                
                <span key={index} className="interest-message" style={{margin:'20px'}} >
                {interest.messageInput}
              </span></div>
                 
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyPosts;

import jwt_decode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Other.css'; // Import the custom CSS file
import { MDBInput } from 'mdb-react-ui-kit';

const OtherIdeas = ({username}) => {
  const [ideas, setIdeas] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const token = localStorage.getItem('token');
  const decodedToken = jwt_decode(token);
  const userId = decodedToken.userId;

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get('/business/othersideas');
        setIdeas(response.data);
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    };

    fetchIdeas();
  }, []);

  // Function to handle showing interests
  const showInterests = (ideaId) => {
    // Implement logic to show interests for the idea with ideaId
    console.log(`Showing interests for idea with ID: ${ideaId}`);
  };

  // Function to handle sending interests
  const sendInterest = async (ideaId) => {
    setSelectedIdea(ideaId);
  };
  
  const sendMessage = async(ideaId) => {
    // Implement logic to send a message to the user with userId
    try {
   
      const response = await axios.post('/business/send-interest', {
        senderId:userId,
        messageInput,
        ideaId,
        username
      });
      setSelectedIdea(null);
      setMessageInput('');
      console.log('Interest sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending interest:', error);
    }
 
  };

  return (
    <div className="Container" style={{ height: '100%', flexDirection: 'row-reverse', maxHeight: '390px', overflowY: 'auto' }}>
      {ideas.length === 0 ? (
        <p className='p'>No ideas available.</p>
      ) : (
        <ul className='uls'>
          {[...ideas].reverse().map((idea) => (
            <li key={idea._id} className='lis'>
              <h3 className='h3'>{idea.category}</h3>
              <p className='p'><strong className='strong'>Market:</strong> {idea.market}</p>
              <p className='p'><strong className='strong'>Description:</strong> {idea.shortdes}</p>
              <p className='p'><strong className='strong'>Required Amount:</strong> {idea.requiredamount}</p>

              <div>
                <p>Total interests: {idea.interests.length}</p>
                <button className='b' onClick={() => sendInterest(idea._id)}>Send Interest</button>
                <Link to={`/user/user-profile/${idea.postedUserId}`} className='b' onClick={() => sendMessage(idea.postedUserId)}>
                  <strong>Contact</strong>
                </Link>

                {/* Display message input if an idea is selected for sending interest */}
                {selectedIdea === idea._id && (
                  <div>
                    <br/>
                    <MDBInput
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type your message..."
                    />
                    <br/>
                    <button  
                    style={{backgroundColor:'#f8f8f8',border:'none'}} onClick={() => sendMessage(idea._id)}>Send Message</button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OtherIdeas;

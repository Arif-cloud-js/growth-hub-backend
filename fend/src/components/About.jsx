import jwt_decode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const About = ({ getusername }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const decodedToken = jwt_decode(token);
  const userId = decodedToken.userId;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/user/myprofile/${userId}`);
        setUserData(response.data);
        getusername(response.data.username);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const messagesContainerStyle = {
    height: '100%',
    flexDirection: 'row-reverse',
    maxHeight: '400px',
    overflowY: 'auto',
  };

  return (
    <MDBContainer className='mt-5'>
      <MDBRow>
      
        <MDBCol md='8' className='mx-auto'>
          {loading ? (
            <h4 className='text-center mb-4'>Loading...</h4>
          ) : (
            <MDBCard>
              <MDBCardBody>
                <h2 className='text-center mb-4'>User Profile</h2>

                <MDBRow className='mb-4'>
                  <MDBCol>
                    <MDBCard>
                      <MDBCardBody>
                        <MDBCardTitle className='text-center mb-4'>
                          User Information
                        </MDBCardTitle>
                        <MDBListGroup flush>
                          <MDBListGroupItem>
                            <strong>User Name:</strong> {userData.username}
                          </MDBListGroupItem>
                          <MDBListGroupItem>
                            <strong>Email:</strong> {userData.email}
                          </MDBListGroupItem>
                          <MDBListGroupItem>
                            <strong>Role:</strong> {userData.role}
                          </MDBListGroupItem>
                          <MDBListGroupItem>
                            <strong>Experience 1:</strong>{' '}
                            {userData.experience1}
                          </MDBListGroupItem>
                          <MDBListGroupItem>
                            <strong>Experience 2:</strong>{' '}
                            {userData.experience2}
                          </MDBListGroupItem>
                        </MDBListGroup>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard>
                      <MDBCardBody>
                        <MDBCardTitle className='text-center mb-4'>
                          Skills
                        </MDBCardTitle>
                        <MDBListGroup flush>
                          <MDBListGroupItem>
                            <strong>Skill 1:</strong> {userData.skill1}
                          </MDBListGroupItem>
                          <MDBListGroupItem>
                            <strong>Skill 2:</strong> {userData.skill2}
                          </MDBListGroupItem>
                          <MDBListGroupItem>
                            <strong>Skill 3:</strong> {userData.skill3}
                          </MDBListGroupItem>
                          <MDBListGroupItem>
                            <strong>Skill 4:</strong> {userData.skill4}
                          </MDBListGroupItem>
                        </MDBListGroup>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          )}
        </MDBCol>

        <MDBCol md='4'>
        <h4 className='text-center mb-3'>Messages</h4>
<div style={messagesContainerStyle}>
  
  {userData.messages ? (
    <ul className='list-group list-group-flush'>
      {[...userData.messages].reverse().map((message) => (
        <li
          key={message._id}
          className='list-group-item   align-items-center'
        >
          <Link
            to={`/user/user-profile/${message.senderId}`}
            className='text-dark text-decoration-none '
          >
            <h5>{message.sender}</h5>
          </Link>
          
          <p className='text-muted'>
            {message.content}
          </p>
        </li>
      ))}
    </ul>
  ) : (
    <p className='text-center'>No messages available.</p>
  )}
</div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default About;


import axios from 'axios'
import React, {useState} from 'react'
import jwtdecode from 'jwt-decode'
import Nav from 'react-bootstrap/Nav';
import {  useNavigate ,Link} from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBRadio,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFooter,
  MDBIcon,
  MDBCardImage,
  
} from 'mdb-react-ui-kit'
const ForgetPassWord = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const style = { color: "#116D6E", fontSize: "1.5em" }
  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('/forgot-password', { email });
      setMessage(response.data.message);
      setError('');
      
      // After successfully sending the email, navigate the user to the password reset page
      navigate(`/reset-password/${response.data.token}`);
    } catch (error) {
      setMessage('');
      setError(error.response.data.error);
    }
  };

  return (
    <MDBContainer className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
     
    <MDBRow className="border p-4">
    <MDBRow>  Enter Your Email to retrieve password </MDBRow>
      <MDBCol md='2' className='d-flex align-items-center justify-content-end'>
      
        <MDBIcon fas icon="user me-2" size='sm' style={style} />
      </MDBCol>
      <MDBCol md='10' className='text-center'>
        <MDBInput
          placeholder='Email'
          name="email"
          icon="user"
          group
          type="email"
          validate
          error="wrong"
          value={email}
          success="right"
          onChange={(e) => setEmail(e.target.value)}
          size='lg'
          required
          autoComplete='off'
        />
      </MDBCol>
      <MDBCol md='12' className='text-center mt-3'>
        <MDBBtn onClick={handleForgotPassword}>Send</MDBBtn>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  


  
  );
};

export default ForgetPassWord;

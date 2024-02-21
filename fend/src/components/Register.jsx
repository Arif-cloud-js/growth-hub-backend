// Register.js
import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
} from 'mdb-react-ui-kit';

const Register = () => {
  const navigate = useNavigate();
  const style = { color: '#116D6E', fontSize: '1.5em' };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [experience1, setExperience1] = useState('');
  const [experience2, setExperience2] = useState('');
  const [skill1, setSkill1] = useState('');
  const [skill2, setSkill2] = useState('');
  const [skill3, setSkill3] = useState('');
  const [skill4, setSkill4] = useState('');

  const handleUserLogin = async () => {
    try {
      const response = await axios.post('/register', {
        email,
        username,
        password,
        role,
        experience1, experience2,
        skill1, skill2, skill3, skill4,
      });

      localStorage.setItem('token', JSON.stringify(response.data.token));
      navigate('/login');
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-2' style={{ borderRadius: '10px' }}>
        <MDBCardBody>
          <MDBRow>
            {/* Column 1 */}
            <MDBCol md='6'>
              <div className='mb-4'>
                <MDBIcon fas icon='user me-2' size='lg' style={style} />
                <MDBInput
                  placeholder='User Name'
                  name='username'
                  icon='user'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                  onChange={(e) => setUsername(e.target.value)}
                  size='lg'
                  required
                  autoComplete='off'
                />
              </div>

              <div className='mb-4'>
                <MDBIcon fas icon='envelope me-2' size='lg' style={style} />
                <MDBInput
                  placeholder='Email Address'
                  name='email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                  onChange={(e) => setEmail(e.target.value)}
                  size='lg'
                  required
                  autoComplete='off'
                />
              </div>

              <div className='mb-4'>
                <MDBIcon fas icon='lock me-2' size='lg' style={style} />
                <MDBInput
                  placeholder='Password'
                  name='password'
                  icon='lock'
                  group
                  type='password'
                  validate
                  onChange={(e) => setPassword(e.target.value)}
                  size='lg'
                  required
                  autoComplete='off'
                />
              </div>
              <div className='mb-4'>
                <MDBIcon fas icon='tools me-2' size='lg' style={style} />
                <MDBInput
                  placeholder='Skill 3'
                  name='skill3'
                  icon='tools'
                  group
                  type='text'
                  validate
                  onChange={(e) => setSkill3(e.target.value)}
                  size='lg'
                  required
                  autoComplete='off'
                />
              </div>

              <div className='mb-4'>
                <MDBIcon fas icon='tools me-2' size='lg' style={style} />
                <MDBInput
                  placeholder='Skill 4'
                  name='skill4'
                  icon='tools'
                  group
                  type='text'
                  validate
                  onChange={(e) => setSkill4(e.target.value)}
                  size='lg'
                  required
                  autoComplete='off'
                />
              </div>
            </MDBCol>

            {/* Column 2 */}
            <MDBCol md='6'>
              

              <div className='mb-4'>
                <MDBIcon fas icon='tools me-2' size='lg' style={style} />
                <MDBInput
                  placeholder='Skill 1'
                  name='skill1'
                  icon='tools'
                  group
                  type='text'
                  validate
                  onChange={(e) => setSkill1(e.target.value)}
                  size='lg'
                  required
                  autoComplete='off'
                />
              </div>

              <div className='mb-4'>
                <MDBIcon fas icon='tools me-2' size='lg' style={style} />
                <MDBInput
                  placeholder='Skill 2'
                  name='skill2'
                  icon='tools'
                  group
                  type='text'
                  validate
                  onChange={(e) => setSkill2(e.target.value)}
                  size='lg'
                  required
                  autoComplete='off'
                />
              </div>
              <div className='mb-4'>
                <MDBIcon fas icon='briefcase me-2' size='lg' style={style} />
                <MDBInput
                  placeholder='Experience 1'
                  name='experience1'
                  icon='briefcase'
                  group
                  type='text'
                  validate
                  onChange={(e) => setExperience1(e.target.value)}
                  size='lg'
                  required
                  autoComplete='off'
                />
              </div>

              <div className='mb-4'>
                <MDBIcon fas icon='briefcase me-2' size='lg' style={style} />
                <MDBInput
                  placeholder='Experience 2'
                  name='experience2'
                  icon='briefcase'
                  group
                  type='text'
                  validate
                  onChange={(e) => setExperience2(e.target.value)}
                  size='lg'
                  required
                  autoComplete='off'
                />
              </div>

              <MDBRow>
            <MDBCol>
              <MDBRadio
                label='Business'
                name='business-startups'
                icon='lock'
                group
                type='radio'
                value='business-startups'
                checked={role === 'business-startups'}
                onChange={(e) => setRole(e.target.value)}
              />
              <MDBRadio
                label='Freelancer'
                name='role'
                icon='user'
                group
                type='radio'
                value='freelancer'
                checked={role === 'freelancer'}
                onChange={(e) => setRole(e.target.value)}
              />
            </MDBCol>
            <MDBCol>
              <MDBRadio
                label='Investor'
                name='role'
                icon='user-tie'
                group
                type='radio'
                value='investor'
                checked={role === 'investor'}
                onChange={(e) => setRole(e.target.value)}
              />
              <MDBRadio
                label='Client'
                name='role'
                icon='user'
                group
                type='radio'
                value='client'
                checked={role === 'client'}
                onChange={(e) => setRole(e.target.value)}
              />
            </MDBCol>
          </MDBRow>
            </MDBCol>
          </MDBRow>

          

          <MDBBtn size='lg' color='grey' className='grey accent-4' onClick={handleUserLogin}>
            Register
          </MDBBtn>

          <p className='mt-3 text-center'>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Register;

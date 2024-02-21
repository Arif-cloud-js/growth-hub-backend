import axios from 'axios'
import React, {useState} from 'react'
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

const Login = ({ handleLogin,getroles}) => {
  const navigate= useNavigate();
  const style = { color: "#116D6E", fontSize: "1.5em" }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [Error,setError]=useState('');

  const handleUserLogin = async () => {
    try {
      const response = await axios.post('/login',{ email, password ,role});
      if(response.data.roles==='admin')
      {
       
        getroles(response.data.roles);
        navigate('/manageusers')
      }
      else{
        handleLogin(response.data.token);
        getroles(response.data.roles);
        localStorage.setItem('token',JSON.stringify(response.data.token));
        navigate('/user/myprofile/:userId')
        setError(response.data.message);
      }
    
    } catch (error) {
      setError(error.response.data.error);
      
    }
  };

  return (
    <MDBContainer fluid>
     
        <MDBCardBody>
          <MDBRow>
      
            <MDBCol md='4' lg='4' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h3 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 " style={{color:'grey'}}>Sign in</h3>
        
              <div className="d-flex flex-row align-items-center mb-4 ">
                
                <MDBIcon fas icon="user me-2" size='lg' style={style}/>
                
                <MDBInput
              placeholder='Email'  
              name="email"
              icon="user"
              group
              type="eamil"
              validate
              error="wrong"
              value={email}
              success="right"
              onChange={(e)=>setEmail(e.target.value)}
              size='lg'
              required
              autoComplete='off'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-2" size='lg' style={style}/>
                <MDBInput
              placeholder='Password'  
              name="password"
              icon="envelope"
              group
              type="password"
              validate
              error="wrong"
              success="right"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              size='lg'
              required
              autoComplete='off'/>
              </div>


             <MDBRow>
              <MDBCol>
              <MDBRadio label="Business"
             name="business-startups"
             icon="lock"
             group  
            type="radio"
            value="business-startups"
            checked={role === "business-startups"}
            onChange={(e) => setRole(e.target.value)}
            />
            
            <MDBRadio label="Freelancer"
             name="freelancer"
             icon="lock"
             group  
            type="radio"
            value="freelancer"
            checked={role === "freelancer"}
            onChange={(e) => setRole(e.target.value)}
            />
              </MDBCol>

              <MDBCol>
              <MDBRadio label="Investor"
             name="investor"
             icon="lock"
             group  
            type="radio"
            value="investor"
            checked={role === "investor"}
            onChange={(e) => setRole(e.target.value)}
            />
             <MDBRadio label="Client"
             name="client"
             icon="lock"
             group  
            type="radio"
            value="client"
            checked={role === "client"}
            onChange={(e) => setRole(e.target.value)}
            />
              </MDBCol>
             </MDBRow>
             <p className='text-center' style={{backgroundColor:'tan',border:'none',width:'15rem'}}>{Error}</p>
             <Link  to="/forgot-password">Forget Password ?</Link>
              <button size='lg' style={{backgroundColor:'#116D6E',border:'none', width:'10rem',height:'3rem',
              color:'#fff',borderRadius:'10px', hover:{backgroundColor:'#000'}
            
            }} onClick={handleUserLogin}>Login</button>
              Don't have an account ?
              <Link  to='/register'>Register</Link>
            </MDBCol>
            <MDBCol md='8' lg='8' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              
            </MDBCol>

           
          </MDBRow>
        </MDBCardBody>
  </MDBContainer>
  )
}

export default Login;

    /*
      
    
          <div className="d-flex align-center mb-3">
            <MDBIcon fas icon="envelope me-3" size='sm'/>
            <MDBRadio label="Business Starups"
             name="business-startups"
             icon="lock"
             group  
            type="radio"
            value="business-startups"
            checked={role === "business-startups"}
            onChange={(e) => setRole(e.target.value)}
            />
             <MDBIcon fas icon="envelope me-3" size='sm'/>
            
          </div>
          
          <div className="d-flex align-center mb-3">
            <MDBIcon fas icon="envelope me-3" size='sm'/>
           
            <MDBIcon fas icon="envelope me-3" size='sm'/>
           
          </div>
    */
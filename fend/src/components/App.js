import React, { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import ContactUs from './ContactUs'
import OtherIdeas from './Business_Startup/OtherIdeas';
import NotificationsComponent from './Freelancer/NotificationsComponent'
import ProjectDetailComponent from './Freelancer/ProjectDetailComponent'
import UserProfileComponent from './Freelancer/UserProfileComponent'
import ClientDashboard from './Clients/ClientDashboard'
import Hiring from './Freelancer/Hiring'
import { MDBIcon } from 'mdb-react-ui-kit'
import ForgetPassWord from './ForgetPassWord';
import ResetPassWord from './ResetPassWord';
import InvestorsSearch from './Business_Startup/InvestorsSearch'
import Login from './Login';
import PostIdeas from '../components/Business_Startup/PostIdeas'
import Jobs from './Freelancer/Jobs';
import AdminSidebar from './AdminSidebar';
import About from './About';
import Logout from './Logout';
import Home from './Home'
import AdminDashboard from './AdminDashboard'
import Register from './Register'
import Experts from './Investor/Experts'
import PostPlan from './Investor/PostPlan';
import Plans from './Business_Startup/Plans'
import FLS from './Clients/FLS'
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import ManageUsers from './ManageUsers';
import MailBox from './MailBox';
import CreateProject from './Clients/CreateProject';
import ProjectForm from './Clients/ProjectForm';
import BusinessDashboard from './Business_Startup/BusinessDashboard';
import MyPosts from './Business_Startup/MyPosts';
import InvestorDashboard from './Investor/InvestorDashboard';

const App = () => {

  const [token, setToken] = useState('');
  const [role, setrole] = useState('');
  const [username, setusername] = useState('');
  const [admin, setadmin] = useState(false);
  const [freelancer, setfreelancer] = useState(false);
  const [businessStartups, setbusiness_startups] = useState(false);
  const [investor, setInvestor] = useState(false);
  const [client, setClient] = useState(false);

  const getusername = (newUsername) => {
    setusername(newUsername);
  }
  const getroles = (roles) => {
    setrole(roles);
    if (roles === 'freelancer') {
      setfreelancer(true);
    }
    else if (roles === 'business-startups') {
      setbusiness_startups(true);
    }
    else if (roles === 'investor') {
      setInvestor(true);
    }
    else if (roles === 'client') {
      setClient(true);
    }
    else if (roles === 'admin') {
      setadmin(true);
    }
  }
  const handleLogin = (newToken, roles) => {
    setToken(newToken);
  };

  const handleLogout = () => {
    setToken('');
    setClient(false)
    setfreelancer(false)
    setInvestor(false)
    setadmin(false)
    setbusiness_startups(false)


  };
  const roleChech = () => {


  }

  return (
    <BrowserRouter>

      {admin ? (
        <MDBRow>
          <MDBCol md='2' lg='2'> <AdminSidebar handleLogout={handleLogout} /></MDBCol>
          <MDBCol md='10' lg='10'>
            <Routes style={{ backgroundColor: 'green' }}>
              <Route
                exact path="/dashboard"
                element={<AdminDashboard />}
              />
              <Route
                path="/manageusers"
                element={<ManageUsers />}
              />
              <Route
                path="/mail"
                element={<MailBox />}
              />

            </Routes>

            {/* Render the user navigation for routes starting with /user */}


          </MDBCol>
        </MDBRow>
      ) : <nav className="navbar navbar-expand-lg sticky-top " style={{ backgroundColor: '#116D6E' }} >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: '#fff', fontSize: '30px' }}>Growth Hub</Link>
          <button className="navbar-toggler" style={{ border: 'none', color: 'transparent' }}
            type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ color: '#333' }}>

              <MDBIcon fas icon="bars me-2" size='lg' /></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ maxHeight: '150px' }}>
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: '#fff' }}>Home</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="/contactus" style={{ color: '#fff' }}>Contact Us</Link>
              </li>

            </ul>
            {token && (
              <>
                {freelancer && (
                  <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ maxHeight: '150px', color: '#fff' }} >
                       <li className="nav-item">
                      <Link className="nav-link primary" to="/user/myprofile/:userId" style={{ color: '#fff' }}>Profile</Link>
                    </li>
                  
                    <li >
                      <Link className="nav-link primary" to="/notifications/:username" style={{ color: '#fff' }}>Notifications</Link>
                    </li>
                    <li >
                      <Link className="nav-link primary" to="/project-details/:projectId" style={{ color: '#fff' }}></Link>
                      <Link className="nav-link primary" to="/user-profile/:username" style={{ color: '#fff' }}></Link>
                    </li>
                    <li >
                      <Link className="nav-link primary" to="/jobs" style={{ color: '#fff' }}>Jobs..</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link primary" to="/hiring/:username" style={{ color: '#fff' }}>Hired by</Link>
                    </li>

                  </ul>
                )}
              </>
            )}
            {token && (
              <>
                {businessStartups && (
                  <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ maxHeight: '150px' }}>

                    <li className="nav-item">
                      <Link className="nav-link" to="/user/myprofile/:userId" style={{ color: '#fff' }}>Profile</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link primary" to="/business-dashboard" style={{ color: '#fff' }}>Dashborad</Link>
                    </li>
                  
                  </ul>
                )}
              </>
            )}
            {token && (
              <>
                {investor && (
                  <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ maxHeight: '150px' }}>

                    <li className="nav-item">
                      <Link className="nav-link" to="/user/myprofile/:userId" style={{ color: '#fff' }}>Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link primary" to="/investor-dashboard" style={{ color: '#fff' }}>Dashboard</Link>
                    </li>

                  </ul>
                )}
              </>
            )}


            {token && (
              <>
                {client && (
                  <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ maxHeight: '150px' }}>

                    <li className="nav-item">
                      <Link className="nav-link primary" to="/user/myprofile/:userId" style={{ color: '#fff' }}>Profile</Link>
                    </li>
                  
                    <li className="nav-item">
                      <Link className="nav-link primary" to="/client-dashboard" style={{ color: '#fff' }}>DashBoard </Link>
                    </li>
                  </ul>
                )}
              </>
            )}
            <ul style={{ listStyleType: 'none' }}>
              {token ? (
                <li className="nav-item">
                  <Logout handleLogout={handleLogout} />
                </li>
              ) : <li className="nav-item">
                <Link to="/login"><button className="rounded-pill border-white" style={{ width: "90px", background: 'transparent', color: '#fff' }}  >Login</button></Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>}
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/business-dashboard" element={<BusinessDashboard />}>
          <Route path="post" element={<PostIdeas />} />
          <Route path="othersideas" element={<OtherIdeas username={username} />} />
          <Route path="recently" element={<MyPosts />} />
        </Route>
        <Route path="/investor-dashboard" element={<InvestorDashboard />} >
          <Route path="ideas" element={<OtherIdeas username={username} />} />
          <Route path="entreprenuer" element={<Experts username={username} />} />
        </Route>
         <Route path="/client-dashboard" element={<ClientDashboard/>} >
          <Route path="freelancers" element={<FLS username={username} />} />
          <Route path="create-project" element={<ProjectForm username={username} />} />
          <Route path="my-project" element={<CreateProject username={username} />} />
        </Route>

        <Route path="/login" element={<Login handleLogin={handleLogin} getroles={getroles} />}></Route>
        <Route path="/forgot-password" element={<ForgetPassWord />} />
        <Route path="/reset-password/:token" element={<ResetPassWord />} />
       
        <Route path="/createprojects" element={<ProjectForm username={username} />}></Route>
        <Route path="/postidea" element={<PostIdeas username={username} />}></Route>
        <Route path="/postplan" element={<PostPlan username={username} />}></Route>
        <Route path="/user/user-profile/:postedUserId" element={<UserProfileComponent username={username} />}></Route>
        <Route path="/project-details/:projectId" element={<ProjectDetailComponent username={username} />}></Route>
        <Route path="/investors" element={<InvestorsSearch username={username} />}></Route>
        <Route path="/jobs" element={<Jobs username={username} />}></Route>
        <Route path="/plans" element={<Plans username={username} />}></Route>
        <Route path="/hiring/:username" element={<Hiring username={username} />}></Route>
        <Route path="/freelancers" element={<FLS username={username} />}></Route>
        <Route path="/notifications/:username" element={<NotificationsComponent username={username} />}></Route>
       
        <Route path="/contactus" element={<ContactUs username={username} />}></Route>
        <Route path="/user/myprofile/:userId" element={token && (< About token={token} getusername={getusername} username={username} />)}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;









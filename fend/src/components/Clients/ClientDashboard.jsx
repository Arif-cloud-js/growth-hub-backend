import React from 'react';
import {Link ,Outlet} from 'react-router-dom'
import { MDBIcon } from 'mdb-react-ui-kit';
import '..//Business_Startup/Business.css'; // You can create this CSS file to style your components

const ClientDashboard = () => {

  return (
   <div className="D-container">
   
   <div className="D-sidebar">
      <ul>
      <li>
          <Link to="/client-dashboard/freelancers"><MDBIcon icon='user me-2'></MDBIcon> Hire Freelancer</Link>
        </li>
      
        <li>
          <Link to="/client-dashboard/create-project"><MDBIcon icon='project-diagram me-2'></MDBIcon> Create Project</Link>
        </li>
        <li>
          <Link to="/client-dashboard/my-project"><MDBIcon icon='chalkboard-teacher me-2'></MDBIcon> Projects</Link>
        </li>
      </ul>
    </div>
    <div className="D-content">
    <h2 className='h2'>Explore Professional Freelancers</h2>
    <Outlet></Outlet>
      </div>  

   </div>
  );
};





export default ClientDashboard;

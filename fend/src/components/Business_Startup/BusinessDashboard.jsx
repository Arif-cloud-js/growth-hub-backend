import React from 'react';
import {Link ,Outlet} from 'react-router-dom'
import { MDBIcon } from 'mdb-react-ui-kit';
import './Business.css'; // You can create this CSS file to style your components

const BusinessDashboard = () => {

  return (
   <div className="D-container">
   
   <div className="D-sidebar">
      <ul>
      <li>
          <Link to="/business-dashboard/post"><MDBIcon icon='lightbulb me-2'></MDBIcon> Post Idea</Link>
        </li>
        <li>
          <Link to="/business-dashboard/othersideas"><MDBIcon icon='random me-2'></MDBIcon> Others Ideas</Link>
        </li>
        <li>
          <Link to="/business-dashboard/recently"><MDBIcon icon='project-diagram me-2'></MDBIcon>Recently posted</Link>
        </li>
      
      </ul>
    </div>
    <div className="D-content">
    <h2 className='h2'>Explore Business Ideas</h2>
    <Outlet></Outlet>
      </div>  

   </div>
  );
};





export default BusinessDashboard;

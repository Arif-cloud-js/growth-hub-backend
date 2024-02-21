import React from 'react';
import {Link ,Outlet} from 'react-router-dom'
import '..//Business_Startup/Business.css'; // You can create this CSS file to style your components

const InvestorDashboard = () => {

  return (
   <div className="D-container">
   
   <div className="D-sidebar">
      <ul>
      <li>
          <Link to="/investor-dashboard/ideas">Latest Ideas</Link>
        </li>
      
        <li>
          <Link to="/investor-dashboard/entreprenuer">Entreprenuer</Link>
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





export default InvestorDashboard;

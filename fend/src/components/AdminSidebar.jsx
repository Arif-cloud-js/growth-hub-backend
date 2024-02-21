import React, { useState } from 'react';
import './Admin.css';
import  {Link } from 'react-router-dom'
import Logout from './Logout';
import { MDBIcon } from 'mdb-react-ui-kit';
function Sidebar({handleLogout}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
  <>
  <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo">Admin Panel</div>
      <ul className="menu">
        <li>
          
          <Link className="nav-link" to="/dashboard"><MDBIcon fas icon='clipboard-list' size='lg'/>  Dashboard</Link>
        </li>
        <li>
          <Link className="nav-link" to="/manageusers"><MDBIcon fas icon='users' size='lg'/>  Manage Users</Link>
        </li>
        <li>
          <Link className="nav-link" to="/mail"><MDBIcon fas icon='chalkboard-teacher' size='lg'/>  Mail</Link>
        </li>
       <li className="nav-item"> <Logout handleLogout={handleLogout} /></li>
      </ul>
    </div>
  </>
  );
}

export default Sidebar;

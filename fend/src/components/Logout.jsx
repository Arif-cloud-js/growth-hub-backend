
import React from 'react';
import { useNavigate } from 'react-router';


const Logout = ({ handleLogout }) => {
  const navigate=useNavigate();
  const handleClick = () => {
    alert("please login again...")
    navigate('/');
    handleLogout();
    localStorage.removeItem('token','roles');
    
  };

  return (
    <button className="rounded-pill border-white" style={{width: "90px" ,background:'transparent',color:'#fff'}} onClick={handleClick}>
      Logout
    </button>
  );
};

export default Logout;

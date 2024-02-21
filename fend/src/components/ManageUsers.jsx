import React,{useEffect,useState} from "react";
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShareFromSquare,faBoxArchive, faTrash} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { Link } from "react-router-dom";
const ManageUsers = () => {
    const [postdata, setPostData] = useState('');
    useEffect(() => {
        fetchUsers();
      }, [])
      const fetchUsers = async () => {
        const response = await axios.get("/manageusers");
        setPostData(response);
      };
      const  deleteUser = async (userid,username) => {
       if(window.confirm('Are you sure you want to delete'+(username))){
       const response = await axios.post(`/deleteuser`,{userid});
       alert(response.data);
       fetchUsers();
      }}
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>#ID</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Role</th>
          <th>Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      
     {postdata &&
       postdata?.data.map((post)=>(
        <tr>
        <td>{post._id}</td>
        <td>{post.username}</td>
        <td>{post.email}</td>
        <td>{post.role}</td>
        <td><button style={{border:'none' ,outline:'none' ,backgroundColor:'white'}}><FontAwesomeIcon 
         onClick={()=>deleteUser(post._id,post.username)}
        icon={faTrash} 
         color="crimson" /></button></td>
      </tr>
       ))
     }
      </MDBTableBody>
    </MDBTable>
  );
};

export default ManageUsers;

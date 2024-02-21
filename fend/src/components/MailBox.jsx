import React,{useEffect,useState} from "react";
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShareFromSquare,faBoxArchive, faTrash} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { Link } from "react-router-dom";
const MailBox = () => {
    const [postdata, setPostData] = useState('');
    useEffect(() => {
        const fetchUsers = async () => {
          const response = await axios.get("/mailbox");
          setPostData(response);
        };
        fetchUsers();
      }, [])
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
        
          <th>Name</th>
          <th>Subject</th>
          <th>Message</th>
        
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      
     {postdata &&
       postdata?.data.map((mail)=>(
        <tr>
        <td>{mail.name}</td>
        <td>{mail.subject}</td>
        <td>{mail.message}</td>
        </tr>
       ))
     }
      </MDBTableBody>
    </MDBTable>
  );
};

export default MailBox;

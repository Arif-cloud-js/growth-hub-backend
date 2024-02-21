import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBBtn,
  MDBModalBody,
  MDBInput,
  MDBModalFooter
} from 'mdb-react-ui-kit';
import jwt_decode from 'jwt-decode';
import './Jobs.css'; // Import your external CSS file

const Jobs = ({ username }) => {
  const [amount, setAmount] = useState('');
  const [completionTime, setCompletion] = useState('');
  const [detail, setDetails] = useState('');
  const [projects, setProjects] = useState([]);
  const [Id, setId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [basicModal, setBasicModal] = useState(false);
  const token = localStorage.getItem('token');
  const decodedToken = jwt_decode(token);
  const PSId = decodedToken.userId;

  useEffect(() => {
  
    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [projects, searchTerm]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const toggleShow = (id) => {
    setBasicModal(!basicModal);
    setId(id);
  };

  const sendProposal = async () => {
    try {
      const response = await axios.post('http://localhost:5001/sendproposal', {
        Id,
        username,
        amount,
        completionTime,
        detail,
        PSId
      });
      setAmount('')
      setCompletion('')
      setDetails('')
      alert(response.data.data);
      
    } catch (error) {
      alert(error);
    }
  };
  const filterProjects = () => {
    // Filter projects based on the search term
    const filtered = projects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <div className="jobs-container">
       <div className="search-container">
        <MDBInput
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput type='text' placeholder='price' name='amount' value={amount} onChange={(e) => setAmount(e.target.value)}></MDBInput>
              <MDBInput type='text' placeholder='Completion Time' name='completionTime' value={completionTime} onChange={(e) => setCompletion(e.target.value)}></MDBInput>
              <MDBInput type='text' placeholder='Details' name='detail' value={detail} onChange={(e) => setDetails(e.target.value)}></MDBInput>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={() => sendProposal()}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <h3>Jobs For Freelancers</h3>

      {filteredProjects.length > 0 ? (
  filteredProjects.map((project) => (
    <div key={project._id} className="job-card">
      <div className="job-header">
        {/* ... (existing JSX for rendering project header) */}
      </div>
      <p className="job-title">{project.title}</p>
      <p className="job-description">{project.description}</p>
      <div className="job-details">
        <p>Posted :</p>
        <p>{project.creationTime}</p>
      </div>
      <button
        className="proposal-button"
        onClick={() => toggleShow(project._id)}
      >
        Send Proposal <FontAwesomeIcon icon={faShareFromSquare} />
      </button>
      {basicModal && (
        <div className="modal">
          <div className="modal-dialog">
            {/* ... (existing JSX for modal) */}
          </div>
        </div>
      )}
    </div>
  ))
) : (
  <p>No jobs found.</p>
)}
    </div>
  );
};

export default Jobs;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardBody,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBBtn,
  MDBModalBody,
  MDBInput,
  MDBModalFooter,
  MDBCardText,
} from 'mdb-react-ui-kit';
import '../Freelancer/Jobs.css'; // Import your external CSS file

const Plans = ({ username }) => {
  const [amount, setAmount] = useState('');
  const [completionTime, setCompletion] = useState('');
  const [detail, setDetails] = useState('');
  const [projects, setProjects] = useState([]);
  const [Id, setId] = useState('');
  const [basicModal, setBasicModal] = useState(false);

  useEffect(() => {
    // Fetch projects on component mount
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/plans');
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
      const response = await axios.post('/sendproposal', {
        Id,
        username,
        amount,
        completionTime,
        detail,
      });
      alert(response.data.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="jobs-container">
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
<MDBModalDialog>
<MDBModalContent>
  <MDBModalHeader>
    <MDBModalTitle>Send Request to Investor</MDBModalTitle>
    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
  </MDBModalHeader>
  <MDBModalBody> <MDBInput type='textarea' placeholder='Details' name='detail' value={detail} onChange={(e)=>setDetails(e.target.value)}></MDBInput>
  </MDBModalBody>
  <MDBModalFooter>
    <MDBBtn color='secondary' onClick={toggleShow}>
      Close
    </MDBBtn>
    <MDBBtn onClick={()=>sendProposal()}>Send</MDBBtn>
  </MDBModalFooter>
</MDBModalContent>
</MDBModalDialog>
</MDBModal>

      <h3>Opportunity for Business Startups</h3>
      {projects.map((project) => (
        <div key={project._id} className="job-card">
          <div className="job-header">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AfwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADMQAAIBAwEGBAQEBwAAAAAAAAABAgMEESEFEjFBUXETIjJhI1KBoUKR0eEUJDNDYoKx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD7iAAAAAAGAMg4Tu6FP1VY9lqcntK35b7/ANQJgIa2lbvi5LvE7U7mjU0hUi304MDsBkAAAAAAAAAACsv7160qMvaUl/xAd7q/hRzGHnn9kVla5q1v6k3jotEcQaiMmAbxpzn6ISl2i2EaA2lCcPXGUe6wYA70LutR9Msx+WWqLO1vadx5fTP5WUhlNppp4wIr0gIFhe+L8Oq/PyfzfuTzKgAAABgQ9o3Pg09yL88/simO11V8avOfLPl7HE1iABtCO/OMPmaQRPsLKM4qrWWU/TFlmkksIJJJJcjJlpiUVNYkk10aKm/s1R+JTzucGuhbnOvBTozg+Di0B54AGmWU2nlPDLyyuP4iipP1LSSKIlbOreFcpP0z0Y1V2ADKhwvZ+Ha1Jc8Y/PQ7kPar/le8kBTmADTIbRluTjJcU8moygr0cJKcVKLymso2KexvVQW5U1p8sci0p16VRZhUi/qZV0OVzUVKhOb5LQVbmjSWZ1Ir2zqVF5eO4lhLdprVLr7iCMADSBng89DACPR0pb9OM+qTNiPYPNpS7Egy0EPaqzaN9JJkw43cPEtqkObWgFAADTIY3dTpTpyqzUILLZcWtlToYbSlPq+XYVVXTsLiosqGF/loYlY3CetJv7l+CVVDCxuJaeG+70MVrKvSWZQ06rVF+BR5nHuZ7lxd2EKuZU/LPpyZUyjKEnGSw1yZUagGUnJqK4vRBF5YrFpSXsSDWEVCEYrgkkbGWgMACivaPg3Eo48r1j2I5d39v/EUvL646x/QpXo8YwaxFzs6hGlRUtHKay2Symsrx0PJPWm/sW8ZxnFSi00+aM6rYAAAAAK/alCLp+MsKUePuTatSFKDlOSSRTXl1K5lomoJ6IuCMTNmUfEr77Xlhr9eRFjGU5xjFZcnhIvbWgrekoLV831ZdR2ABlQAACBf2XivxaSW/wDiXzfuTwB5tpptPRrkdKFepQeacsdVyZcXNpTuNZLEvmRWV7GtS1S349Y/oaRKpbUWPi02veLO62hbP8bXeLKVrHHTuYEKupbQt0tJuXaLI9XamdKVPHvIrTMU5PEVl+whW1WrOrLeqScmYhGU5KMIuTfBIlUNn1amHPyR9+P5Fnb21O3WKcdXxfNijlY2ioR3p4dR8X0JYBlQAAAAAAAAAAaTpwn64Rl3Rydlbv8AtRJAAjqzt1wpR+up2jCMFiEVFeywbAAAAAAAAAD/2Q=="
              alt='Avatar'
            />
            <Link to='#'>{project.username}</Link>
            <div className="payment-amount">{project.amountInvest}$</div>
          </div>
          <p className="job-title">{project.market}</p>
          <p className="job-description">{project.domain}</p>
          <div className="job-details">
            <p>Posted :</p>
            <p>{project.creationTime}</p>
          </div>
          <button
            className="proposal-button"
            onClick={() => toggleShow(project._id)}
          >
            Interested  <FontAwesomeIcon icon={faShareFromSquare} />
          </button>
          {basicModal && (
            <div className="modal">
              <div className="modal-dialog">
                <div className="modal-header">
                  <h5>Send Proposal</h5>
                  <button className="close-button" onClick={toggleShow}>
                    Close
                  </button>
                </div>
                <div className="modal-body">
                 
  
                  <input
                    type='textArea'
                    placeholder='Details'
                    name='detail'
                    value={detail}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button className="close-button" onClick={toggleShow}>
                    Close
                  </button>
                  <button className="save-button" onClick={sendProposal}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Plans;

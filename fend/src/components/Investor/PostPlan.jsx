// ProjectForm.jsx
import '../Clients/client.css'; // Import your CSS file
import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';
const PostPlan = ({username}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [paymentAmount, setPaymentAmount] = useState(0); // Initialize with 0, adjust as needed
 

 


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get user information for the client

      // Send a request to create a new project
      const response = await axios.post('/api/investment/postplan', {
         domain:title,
        market:description,
        amountInvest:paymentAmount,
        username
       
      });

      // Handle the response as needed
      alert('Plan Posted:', response.data);

      // Trigger a callback to notify the parent component that a project has been created
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div id="projectFormContainer"> <h2>Create a New Investment Plan</h2>
      <div  id="projectForm">
        <label className="projectLabel">Domain :</label>
        <input className="projectInput" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label className="projectLabel">Amount  :</label>
        <input
          className="projectInput"
          type="number"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(e.target.value)}
          required
        />
         <label className="projectLabel">Market:</label>
        <textarea className="projectTextarea" value={description} onChange={(e) => setDescription(e.target.value)} required />

       

       

<MDBBtn size='lg'  color="grey" className="grey accent-4" onClick={handleSubmit}>Post</MDBBtn>
      </div>
    </div>
  );
};

export default PostPlan;

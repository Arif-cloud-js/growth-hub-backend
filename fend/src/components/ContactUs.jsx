import React,{useState} from 'react';

import { MDBInput, MDBCardImage, MDBBtn, MDBTextArea,MDBContainer,MDBCardBody,MDBRow,MDBCol,MDBCardTitle} from 'mdb-react-ui-kit';
import axios from 'axios';
const ContactUs =({username}) =>{
    const [name,setName]= useState('');
    const [subject,setSubject]= useState('');
    const [message,setMessage]= useState('');

     const sendAdmin =async()=>{
          const response = await axios.post('/contactus',{name,subject,message});
          alert(response.data.message);
     }
  return (
       <MDBContainer >
 \
       <MDBRow>
        <MDBCol md='4' lg='4' className='order-1 order-lg-1 d-flex align-items-center'>
        <MDBCardBody>
        <h2 className='mb-3'><b>Contact Us</b></h2>
        <MDBInput label='Name' name='name' autoSave='off' wrapperClass='mb-2' value={name} onChange={(e)=>setName(e.target.value)}
        autoComplete='off'/>
  <MDBInput label='Subject' name='subject' wrapperClass='mb-2' value={subject} onChange={(e)=>setSubject(e.target.value)}
  autoComplete='off' />
  
  <MDBTextArea wrapperClass='mb-4' autoComplete='off' label='Message' name= 'message' value={message} onChange={(e)=>setMessage(e.target.value)} />
  

  <MDBBtn onClick={sendAdmin} color='primary' block className='my-4' >
    Send
  </MDBBtn>
        </MDBCardBody>
        </MDBCol>
      
       </MDBRow>
      </MDBContainer>
  );
};
export default  ContactUs ;
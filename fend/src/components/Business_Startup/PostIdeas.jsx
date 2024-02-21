/* eslint-disable jsx-a11y/aria-proptypes */
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import React, { useState,useNavigate } from 'react'


import {
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCardImage,
    MDBTextArea,
    MDBCardTitle,

} from 'mdb-react-ui-kit'


const PostIdeas = ({username}) => {
    const style =  {color: '#116D6E',fonSize:'1.5rem'};
    const [category, setcategory] = useState('');
    const [market, setMarket] = useState('');
    const [requiredamount, setAmount] = useState('');
    const [shortdes, setDescription] = useState('');
   
    const token = localStorage.getItem('token');
    const decodedToken = jwt_decode(token);
    const postedUserId = decodedToken.userId;
  
    const handlePostIdea = async () => {
        try {
            const response = await axios.post('/business/postideas',{ category, market, shortdes,requiredamount,postedUserId});
             alert(response.data.message)
          
             
        } catch (error) {
            alert('not Posted due to some server issues')

        }
    };

    return (
  <>
        <MDBCardBody>
          <MDBRow>
          <MDBCol md='8' lg='8' className='order-1 order-lg-1 d-flex '>
              <MDBCardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAMN5BXE08V5b30f45VtnJlw2rnwe97tBv_Q&usqp=CAU" fluid/>

            </MDBCol>
            
            <MDBCol md='4' lg='4' className='order-2 order-lg-2 mt-5 d-flex flex-column align-items-center'>

                  
              <div className="d-flex flex-row align-items-center mb-4 ">
                
                <MDBIcon fas icon="industry me-2" size='lg' style={style}/>
                
                <MDBInput
              name="category"
              icon="user"
              aria-autocomplete='false'
              group
              type="text"
              validate
              error="wrong"
              required
              success="right"
              placeholder='Business Category'
              size='lg' 
             value={category}
              onChange={(e)=>setcategory(e.target.value)}
             />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="money-check me-2" size='lg' style={style}/>
                <MDBInput
              name="requiredamount"
              icon="envelope"
              group
              aria-autocomplete='false'
              type="number"
              validate
              error="wrong"
              success="right"
              size='lg'
              required
              placeholder='Required Amount'
              value={requiredamount}
              onChange={(e)=>setAmount(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="search-location me-2" size='lg' style={style}/>
                <MDBInput
              name="market"
              group
              type="text"
              validate
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-autocomplete='false'
              placeholder='Target Market'
              size='lg'
              required
              value={market}
              onChange={(e)=>setMarket(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center">
                <MDBIcon fas icon="pen me-2" size='lg' style={style}/>
                <MDBTextArea
              name="shortdes"
              icon="exclamation-triangle"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              size='lg'
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-autocomplete='false'
              required
              value={shortdes}
              onChange={(e)=>setDescription(e.target.value)}/>
              </div>
              <MDBBtn size='lg' color='grey' className="grey accent-4" onClick={handlePostIdea}>Post Idea</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody></>
    )
}

export default PostIdeas;

/*
  
 
*/
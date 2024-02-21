import React from 'react'
import bg1 from '../images/bg6.jpg'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardBody,
    MDBCardImage,
  } from 'mdb-react-ui-kit'
const More = () => {
  return (
    <MDBContainer className='mt-5'>
    <h4 className='text-center'>More...</h4>
    <MDBRow>
      <MDBCol md='2' lg='2' className='order-1 text-center'> 
      <MDBCardBody>
        <MDBCardImage src={bg1} fluid></MDBCardImage>
      </MDBCardBody>
      </MDBCol>
      <MDBCol md='2' lg='2' className='order-2 text-center'>
      <MDBCardBody>
        <MDBCardImage src={bg1} fluid></MDBCardImage>
      </MDBCardBody>
      </MDBCol>
      <MDBCol md='3' lg='3' className='order-3 text-center'>
      <MDBCardBody>
        <MDBCardImage src={bg1} fluid></MDBCardImage>
      </MDBCardBody>
      </MDBCol>
      <MDBCol md='2' lg='2'className='order-4 text-center'>
      <MDBCardBody>
        <MDBCardImage src={bg1} fluid></MDBCardImage>
      </MDBCardBody>
      </MDBCol>
      <MDBCol md='3' lg='3'className='order-5 text-center'>
      <MDBCardBody>
        <MDBCardImage src={bg1} fluid></MDBCardImage>
      </MDBCardBody>
      </MDBCol>
      <MDBCol md='2' lg='2' className='order-6 mt-3 text-center'>
      <MDBCardBody>
        <MDBCardImage src={bg1} fluid></MDBCardImage>
      </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  )
}

export default More
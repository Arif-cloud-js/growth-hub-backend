import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'

const  Footer=()=> {
  return (
    <MDBFooter  className='text-center text-lg-start '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="industry" className="me-3" />
                Growth Hub
              </h6>
              <p>
              We believe in fostering meaningful connections, empowering individuals and businesses, and nurturing a thriving ecosystem of
               growth and success. Join us today and unlock endless possibilities for your professional journey.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Freelancers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Enterpreneur
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Investors
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <Link to='/login' className='text-reset'>
                  Join Us
                </Link>
              </p>
              <p>
              <Link to='/' className='text-reset'>
                  Growth Hub
                </Link>
              </p>
              <p>
              <Link to='/contactus' className='text-reset'>
                  Growthhub@gmail.com
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Islamabad Szabist H8/4 
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                @GrowthHub.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 92 306  39 99
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 92 3234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{backgroundColor:'#116D6E',color:'#fff'}}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          growthhub.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;
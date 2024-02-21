import React from 'react';
import fpic from './images/freelancer.jpg'
import bs from './images/business.jpg'
import cardpic from './images/cardpic.jpg'
import cli from './images/client.jpg'
import inv from './images/investor.jpg'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots, faHandHoldingDollar, faPersonCircleQuestion, faCoins, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardText,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFooter,
  MDBCardImage,
  MDBCa,
  MDBCardTitle,

} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom';
const Home = () => {

  return (
    <> <MDBContainer fluid style={{ backgroundColor: '#fff', color: '#000' }}>

      <MDBRow className='pt-5'>
        <MDBCol md='6' lg='6' className='order-2  order-lg-2 d-flex flex-column text-start align-items-center'>
          <MDBCardBody>
            <h3><b>Welcome to Growth Hub!
              We are your ultimate <br /> destination for freelancers,  business startups, <br /> investors, and clients. Connect, collaborate, and grow with us.</b></h3>
            <br />
            <ul>
              <li>Your one-stop destination for freelancing, business startups.</li>
              <li>Discover new opportunities and showcase your skills to attract clients.</li>
              <li>Find resources and expert advice to launch and scale your venture.</li>
              <li>Explore investment opportunities and connect with promising projects.</li>
              <li>We are here to support you on your journey to growth and success.</li>
            </ul>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='6' lg='6' className='order-2 order-lg-2  d-flex align-items-center'>

          <MDBCardBody>
            <MDBCardImage src={fpic} fluid></MDBCardImage>
          </MDBCardBody>

        </MDBCol>
      </MDBRow>
    </MDBContainer>

      <MDBContainer fluid style={{ backgroundColor: '#fff', color: '#000', paddingTop: '150px' }}>

        <MDBRow className='p-5'>



          <MDBCol md='6' lg='6' className='order-1 order-lg-1  d-flex align-items-center'>

            <MDBCardBody>
              <MDBCardImage src={fpic} fluid></MDBCardImage>
            </MDBCardBody>

          </MDBCol>

          <MDBCol md='6' lg='6' className='order-2  order-lg-2 d-flex flex-column text-start align-items-center'>
            <MDBCardBody>
              <h1 className=''>Get Growth <br />Wherever you want</h1>
              <h3>01.No Fee</h3>
              <p>Our site is free there is no any kind of fee</p>
              <h3>02.Agreement </h3>
              <p>We perform an agreement before investment on  ideas  </p>
              <h3>03.AI Prediction </h3>
              <p>User can easily check investment on ideas is beneficail or not using AI </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <MDBContainer >
        <MDBRow>
          <MDBCol md='6' lg='6' className='order-1 order-lg-2  d-flex align-items-stretch '>
            <MDBRow className='p-5'>
              <MDBCol md='6' lg='6'>
                <MDBCardBody>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" />
                  <FontAwesomeIcon icon={faArrowUpRightDots} />
                  <h5>Fast Growth</h5>
                  <p>Don’t start from scratch — complete your creative projects with ready made video and audio assets.</p>
                </MDBCardBody>
                <MDBCardBody>
                  <FontAwesomeIcon icon={faHandHoldingDollar} />
                  <h5>Save Money</h5>
                  <p>Don’t start from scratch — complete your creative projects with ready made video and audio assets.</p>
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='6' lg='6'>
                <MDBCardBody>
                  <FontAwesomeIcon icon={faCoins} />
                  <h5>New assets added daily</h5>
                  <p>Stand out and always be on-trend with our ever growing library of creative assets, created by industry experts.</p>
                </MDBCardBody>
                <MDBCardBody>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                  <h5>Cancel any time</h5>
                  <p>We believe in creative freedom. Canceling your subscription is quick and easy — no strings attached.</p>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>

          </MDBCol>
          <MDBCol md='6' lg='6' className='order-2 p-5 text-center'>
            <MDBCardBody>
              <MDBCardImage src={cardpic} fluid></MDBCardImage>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className='' fluid style={{ backgroundColor: '#116D6E', color: '#fff' }}>
        <MDBRow >
          <h4 className='text-center'>Everything you need for your creative projects</h4>
          <p className='text-center'>Growth Hub has millions of Users, Investment plans ,
            Business Ideas, Freelancers, Clients and more. <br />
            All with unlimited downloads included in your subscription.</p>
          <MDBCol md='3' lg='3' className='order-1   text-center'>
            <MDBCard className='mt-3'>

              <MDBCardBody>
                <MDBCardImage src={fpic} fluid></MDBCardImage>
                <MDBCardTitle style={{ color: '#000' }}>Freelancers</MDBCardTitle>
                <MDBCardText className='text-center'>
                  Join our vibrant community of talented freelancers from diverse backgrounds. Showcase your skills, expertise,
                  and portfolio to attract clients, collaborate on exciting projects, and expand your professional network.
                </MDBCardText >
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='3' lg='3' className='order-2 text-center'>
            <MDBCard className='mt-3'>

              <MDBCardBody>
                <MDBCardImage src={bs} fluid></MDBCardImage>
                <MDBCardTitle style={{ color: '#000' }}>Business Startups</MDBCardTitle>
                <MDBCardText className='text-center'>
                  Embark on your entrepreneurial journey with confidence. Discover valuable resources, insightful guides, and expert advice to
                  help you navigate the complexities of starting and scaling a successful business.
                </MDBCardText >
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='3' lg='3' className='order-2 text-center'>
            <MDBCard className='mt-3'>

              <MDBCardBody>
                <MDBCardImage src={inv} fluid></MDBCardImage>
                <MDBCardTitle style={{ color: '#000' }}>Investors</MDBCardTitle>
                <MDBCardText className='text-center'>
                  Explore a range of investment opportunities across various industries. Discover innovative startups and promising ventures seeking funding. Connect with visionary founders, analyze potential returns,
                  and make informed
                </MDBCardText >
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='3' lg='3' className='order-4 text-center'>
            <MDBCard className='mt-3'>

              <MDBCardBody >
                <MDBCardImage src={cli} fluid></MDBCardImage>
                <MDBCardTitle style={{ color: '#000' }}>Clients</MDBCardTitle>
                <MDBCardText className='text-center'>
                  Simplify your search for top-notch professionals by accessing our pool of talented freelancers. Find the perfect
                  match for your project requirements, collaborate seamlessly and achieve exceptional results.
                </MDBCardText >
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>



  );
}

export default Home;
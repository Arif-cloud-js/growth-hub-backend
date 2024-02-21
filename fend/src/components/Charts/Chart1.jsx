import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow, MDBBtn, MDBCardTitle, MDBCardText } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import axios from "axios";


const Chart1 = () => {
  // Bar chart data
  const barChartData = [
    { month: "January", sales: 1200, fill: "#FF6384" },
    { month: "February", sales: 1500, fill: "#FFCE56" },
    { month: "March", sales: 1000, fill: "#FF6384" },
    { month: "April", sales: 1800, fill: "#36A2EB" },
    { month: "May", sales: 2000, fill: "#36A2EB" },
    { month: "June", sales: 1600, fill: "#FF6384" },
  ];

  // Line chart data
  const lineChartData = [
    { day: "Monday", visits: 200 },
    { day: "Tuesday", visits: 300 },
    { day: "Wednesday", visits: 400 },
    { day: "Thursday", visits: 350 },
    { day: "Friday", visits: 500 },
  ];

  // Pie chart data
  const pieChartData = [
    { label: "S1", name: "Stage 1", value: 30, fill: "#FF6384" },
    { label: "S2", name: "Stage 2", value: 50, fill: "#36A2EB" },
    { label: "S3", name: "Stage 3", value: 20, fill: "#FFCE56" },
  ];

  const scatterChartData = [
    { posts: 10, proposals: 30 },
    { posts: 20, proposals: 50 },
    { posts: 30, proposals: 40 },
    { posts: 40, proposals: 80 },
    { posts: 50, proposals: 60 },
    { posts: 60, proposals: 70 },
  ];
  const data = [
    { label: "Variable 1", value: 30 },
    { label: "Variable 2", value: 50 },
    { label: "Variable 3", value: 20 },
  ];

  const [counts, setCounts] = useState([]);
  useEffect(() => {
    // Fetch the user counts from the server
    const fetchUserCounts = async () => {
      try {
        const response = await fetch('/countroles');
        const data = await response.json();
        setCounts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserCounts();
  }, []);

  // Filter specific roles from the counts array
  const getRoleCount = (role) => {
    const filteredRole = counts.find((item) => item._id === role);
    return filteredRole ? filteredRole.count : 0;
  };
  return (
    <div>

      <MDBContainer>
        <MDBRow className="p-4">
          <MDBCol sm='3'>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Freelancers</MDBCardTitle>
                <MDBCardTitle className="text-center">{getRoleCount('freelancer')}</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol sm='3'>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Clients</MDBCardTitle>
                <MDBCardTitle className="text-center">{getRoleCount('client')}</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol sm='3'>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Investors</MDBCardTitle>
                <MDBCardTitle className="text-center">{getRoleCount('investor')}</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol sm='3'>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Business Startups</MDBCardTitle>
                <MDBCardTitle className="text-center">{getRoleCount('business-startups')}</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer>
        <MDBRow>
          <MDBCol md='6' lg='6' className='order-1 order-lg-1  d-flex align-items-center'>

            <MDBCardBody>
              <h2>Bar Chart</h2>
              <BarChart width={400} height={200} data={barChartData}>
                <Bar dataKey="sales" fill="#04393d" />
              </BarChart>
            </MDBCardBody>

          </MDBCol>
          
          <MDBCol md='6' lg='6' className='order-2 order-lg-2  d-flex align-items-center'>
            <MDBCardBody>
              <h2>Pie Chart</h2>
              <PieChart width={400} height={300}>
            <Pie data={pieChartData} label dataKey="value" nameKey="name" fill="#8884d8" />
          </PieChart>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
       

      </MDBContainer>


    </div>
  );
};

export default Chart1;

/*
 
  
  <div>
      <p>Freelancers: {getRoleCount('freelancer')}</p>
      <p>Clients: {getRoleCount('client')}</p>
      <p>Investors: {getRoleCount('investor')}</p>
      <p>Business Startups: {getRoleCount('business_startups')}</p>
    </div>
  
  
  */
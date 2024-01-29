import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

import ImageBMICalc from "../Assets/Projects/BMICalc.png";
import ImageBanking from "../Assets/Projects/Banking.png";
import ImageBudgetCalc from "../Assets/Projects/BudgetCalc.png";
import ImageCalculator from "../Assets/Projects/Calculator.png";
import ImageLuminar from "../Assets/Projects/Luminar.png";
import ImageZudio from "../Assets/Projects/Zudio.png";

function Projects({ theme }) {
  return (
    <div>
      <h1 className="text-center m-3">Projects</h1>

      <Row>

        <Col sm={12} md={6} lg={4} xl={4}>
          <MDBCard className='m-3 border border-3 border-danger' style={theme ? { backgroundColor: 'grey', color: 'black' } : { backgroundColor: 'grey', color: 'white' }}>
            <MDBCardImage src={ImageCalculator} height={'200px'} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className='text-center' style={{ color: 'black' }}>Online Calculator</MDBCardTitle>
              <MDBCardText className='text-center'>
                <a className='bg-light rounded-5 px-2' href="https://github.com/Abdul-Latif-123/Online-Calculator">GitHub Link</a><br />
                <a className='bg-light rounded-5 px-2' href="https://abdul-latif-123.github.io/Online-Calculator/">Live Link</a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <MDBCard className='m-3 border border-3 border-danger' style={theme ? { backgroundColor: 'grey', color: 'black' } : { backgroundColor: 'grey', color: 'white' }}>
            <MDBCardImage src={ImageBanking} height={'200px'} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className='text-center' style={{ color: 'black' }}>Online Banking System</MDBCardTitle>
              <MDBCardText className='text-center'>
                <a className='bg-light rounded-5 px-2' href="https://github.com/Abdul-Latif-123/Online-Banking/">GitHub Link</a><br />
                <a className='bg-light rounded-5 px-2' href="https://abdul-latif-123.github.io/Online-Banking/">Live Link</a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <MDBCard className='m-3 border border-3 border-danger' style={theme ? { backgroundColor: 'grey', color: 'black' } : { backgroundColor: 'grey', color: 'white' }}>
            <MDBCardImage src={ImageBudgetCalc} height={'200px'} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className='text-center' style={{ color: 'black' }}>Budget Calculator</MDBCardTitle>
              <MDBCardText className='text-center'>
                <a className='bg-light rounded-5 px-2' href="https://github.com/Abdul-Latif-123/Budget-Calculator/">GitHub Link</a><br />
                <a className='bg-light rounded-5 px-2' href="https://abdul-latif-123.github.io/Budget-Calculator/">Live Link</a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <MDBCard className='m-3 border border-3 border-danger' style={theme ? { backgroundColor: 'grey', color: 'black' } : { backgroundColor: 'grey', color: 'white' }}>
            <MDBCardImage src={ImageBMICalc} height={'200px'} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className='text-center' style={{ color: 'black' }}>BMI Calculator</MDBCardTitle>
              <MDBCardText className='text-center'>
                <a className='bg-light rounded-5 px-2' href="https://github.com/Abdul-Latif-123/BMI-Calculator/">GitHub Link</a><br />
                <a className='bg-light rounded-5 px-2' href="https://abdul-latif-123.github.io/BMI-Calculator/">Live Link</a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <MDBCard className='m-3 border border-3 border-danger' style={theme ? { backgroundColor: 'grey', color: 'black' } : { backgroundColor: 'grey', color: 'white' }}>
            <MDBCardImage src={ImageLuminar} height={'200px'} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className='text-center' style={{ color: 'black' }}>Luminar website clone</MDBCardTitle>
              <MDBCardText className='text-center'>
                <a className='bg-light rounded-5 px-2' href="https://github.com/Abdul-Latif-123/Luminar-Website-Placements-Page/">GitHub Link</a><br />
                <a className='bg-light rounded-5 px-2' href="https://abdul-latif-123.github.io/Luminar-Website-Placements-Page/">Live Link</a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Col>

        <Col sm={12} md={6} lg={4} xl={4}>
          <MDBCard className='m-3 border border-3 border-danger' style={theme ? { backgroundColor: 'grey', color: 'black' } : { backgroundColor: 'grey', color: 'white' }}>
            <MDBCardImage src={ImageZudio} height={'200px'} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className='text-center' style={{ color: 'black' }}>Zudio website clone</MDBCardTitle>
              <MDBCardText className='text-center'>
                <a className='bg-light rounded-5 px-2' href="https://github.com/Abdul-Latif-123/Task-Exam-Zudio/">GitHub Link</a><br />
                <a className='bg-light rounded-5 px-2' href="https://abdul-latif-123.github.io/Task-Exam-Zudio/">Live Link</a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Col>

      </Row>

    </div >
  )
}

export default Projects
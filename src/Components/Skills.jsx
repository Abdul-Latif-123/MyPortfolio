import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
} from 'mdb-react-ui-kit';

import ImageHTML from "../Assets/Skills/HTML.png";
import ImageCSS from "../Assets/Skills/CSS.jpg";
import ImageJS from "../Assets/Skills/JS.png";
import ImageMNDB from "../Assets/Skills/MNDB.png";
import ImageRJS from "../Assets/Skills/RJS.png";
import ImageNJS from "../Assets/Skills/NJS.jpg";
import ImageEJS from "../Assets/Skills/EJS.png";

function Skills({ theme }) {
  return (
    <div>
      <h1 className="text-center m-3">Skills</h1>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <MDBCard className='m-3 border border-3 border-danger'>
            <MDBCardImage src={ImageHTML} height={'250px'} width={'80px'} position='top' alt='...' />
            <MDBCardBody style={{ backgroundColor: 'grey' }}>
              <MDBCardTitle style={{ color: 'white' }} className='text-center'>HTML</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <MDBCard className='m-3 border border-3 border-danger'>
            <MDBCardImage src={ImageCSS} height={'250px'} width={'80px'} position='top' alt='...' />
            <MDBCardBody style={{ backgroundColor: 'grey' }}>
              <MDBCardTitle style={{ color: 'white' }} className='text-center'>CSS</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <MDBCard className='m-3 border border-3 border-danger'>
            <MDBCardImage src={ImageJS} height={'250px'} width={'80px'} position='top' alt='...' />
            <MDBCardBody style={{ backgroundColor: 'grey' }}>
              <MDBCardTitle style={{ color: 'white' }} className='text-center'>JAVASCRIPT</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <MDBCard className='m-3 border border-3 border-danger'>
            <MDBCardImage src={ImageMNDB} height={'250px'} width={'80px'} position='top' alt='...' />
            <MDBCardBody style={{ backgroundColor: 'grey' }}>
              <MDBCardTitle style={{ color: 'white' }} className='text-center'>MONGODB</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <MDBCard className='m-3 border border-3 border-danger'>
            <MDBCardImage src={ImageRJS} height={'250px'} width={'80px'} position='top' alt='...' />
            <MDBCardBody style={{ backgroundColor: 'grey' }}>
              <MDBCardTitle style={{ color: 'white' }} className='text-center'>REACT JS</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <MDBCard className='m-3 border border-3 border-danger'>
            <MDBCardImage src={ImageNJS} height={'250px'} width={'80px'} position='top' alt='...' />
            <MDBCardBody style={{ backgroundColor: 'grey' }}>
              <MDBCardTitle style={{ color: 'white' }} className='text-center'>NODE JS</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <MDBCard className='m-3 border border-3 border-danger'>
            <MDBCardImage src={ImageEJS} height={'250px'} width={'80px'} position='top' alt='...' />
            <MDBCardBody style={{ backgroundColor: 'grey' }}>
              <MDBCardTitle style={{ color: 'white' }} className='text-center'>EXPRESS JS</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Col>
      </Row>
    </div>
  )
}

export default Skills
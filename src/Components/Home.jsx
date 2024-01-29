import React from 'react'

import MyPic from "../Assets/MyPic.jpg";

import MyResume from "../Assets/Resume/AbdulLatifResume.pdf";

import {
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Home() {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: '500px' }}>
      <p className='h4 text-danger'>
        Hi There!
        <br />
        I AM
        <span className='h1 text-danger'>
          &nbsp;ABDUL LATIF
        </span>
        <br />
        <span className='h5' style={{ color: 'grey' }}>
          Well-qualified ME(A)RN Stack Developer<br />
          familiar with wide range of programming<br />
          utilities and languages. Knowledgeable of<br />
          backend and frontend development requirements.<br />
        </span>
        <a className="btn border border-danger border-2 text-danger mt-2" href={MyResume} target="_blank"
          rel="noreferrer">
          Resume
        </a>
        <a className="btn border border-danger border-2 text-danger mt-2 ms-2" href="#projectsPage">
          View Works
        </a>
        <br />

        <MDBBtn
          floating
          className='mx-1 mt-2'
          style={{ backgroundColor: '#0082ca' }}
          href='https://www.linkedin.com/in/abdul-latif-veliath/'
          role='button'
        >
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn
          floating
          className='mx-1 mt-2'
          style={{ backgroundColor: '#333333' }}
          href='https://github.com/Abdul-Latif-123'
          role='button'
        >
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </p>
      <img className='border border-3 border-danger rounded-5 mx-2' src={MyPic} height={'300px'} alt="" />
    </div>
  )
}

export default Home
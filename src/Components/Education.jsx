import React from 'react'

import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

import './Education.css';

function Education({ theme }) {
  return (
    <div>
      <h1 className="text-center m-3">Education</h1>
      <MDBContainer fluid className="py-5">
        <div className="main-timeline">
          <div className="timeline left">
            <MDBCard>
              <MDBCardBody className="p-4" style={theme ? { backgroundColor: 'rgb(24, 24, 24)', border: '1px solid white', borderRadius: '5px' } : { backgroundColor: 'white' }}>
                <h3 className='text-danger'>2023 - Present</h3>
                <h4 className='text-danger'>Luminar Technolab</h4>
                <p className="mb-0" style={theme ? { color: 'grey' } : { color: 'black' }}>
                  MEA(R)N Stack Web Development intern at Luminar Technolab.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline right">
            <MDBCard>
              <MDBCardBody className="p-4" style={theme ? { backgroundColor: 'rgb(24, 24, 24)', border: '1px solid white', borderRadius: '5px' } : { backgroundColor: 'white' }}>
                <h3 className='text-danger'>2018 - 2023</h3>
                <h4 className='text-danger'>Infosys</h4>
                <p className="mb-0" style={theme ? { color: 'grey' } : { color: 'black' }}>
                  Worked in Infosys for 5 years. I have worked with different teams to design and improve network architecture designs for an Australian government-owned company.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline left">
            <MDBCard>
              <MDBCardBody className="p-4" style={theme ? { backgroundColor: 'rgb(24, 24, 24)', border: '1px solid white', borderRadius: '5px' } : { backgroundColor: 'white' }}>
                <h3 className='text-danger'>2015 - 2018</h3>
                <h4 className='text-danger'>Mahatma Gandhi University</h4>
                <p className="mb-0" style={theme ? { color: 'grey' } : { color: 'black' }}>
                  A student at M.E.S. College Marampally.<br />
                  Passed out with a CGPA of 7.65.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline right">
            <MDBCard>
              <MDBCardBody className="p-4" style={theme ? { backgroundColor: 'rgb(24, 24, 24)', border: '1px solid white', borderRadius: '5px' } : { backgroundColor: 'white' }}>
                <h3 className='text-danger'>2013 - 2015</h3>
                <h4 className='text-danger'>Central Board of Secondary Education</h4>
                <p className="mb-0" style={theme ? { color: 'grey' } : { color: 'black' }}>
                  A student at St. Mary's Public School, Thamarachal.<br />
                  Passed out with 78.2% marks.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline left">
            <MDBCard>
              <MDBCardBody className="p-4" style={theme ? { backgroundColor: 'rgb(24, 24, 24)', border: '1px solid white', borderRadius: '5px' } : { backgroundColor: 'white' }}>
                <h3 className='text-danger'>2013</h3>
                <h4 className='text-danger'>Central Board of Secondary Education</h4>
                <p className="mb-0" style={theme ? { color: 'grey' } : { color: 'black' }}>
                  A student at St. Mary's Public School, Thamarachal.<br />
                  Passed out with 81.7% marks.
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </MDBContainer>
    </div>
  )
}

export default Education
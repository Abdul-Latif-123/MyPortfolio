import React from 'react'

import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';

function Contact({ theme }) {
    return (
        <div>
            <h1 className="text-center m-3">Contact</h1>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='w-50'>
                    <MDBInput className='form-control m-3' label='Name' type='text' {...(theme ? { contrast: true } : {})} />
                    <MDBInput className='form-control m-3' label='Email' type='email' {...(theme ? { contrast: true } : {})} />
                    <MDBTextArea className='form-control m-3' label='Comments' rows={4} {...(theme ? { contrast: true } : {})} />
                    <div className='text-center'>
                        <button className='btn border border-danger border-2 text-danger mb-3'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
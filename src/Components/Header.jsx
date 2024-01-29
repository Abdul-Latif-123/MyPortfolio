import React from 'react'

import PortfolioImage from "../Assets/portfoliodark.png"
import PortfolioImageDark from "../Assets/portfolio.png"

import { useEffect } from 'react';

function Header({ theme, setTheme }) {

    const handleClick = () => {
        setTheme(!theme)
    }

    useEffect(() => {
        if (theme == true) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    })

    return (
        <div className='d-flex align-items-center justify-content-between m-3'>
            <div className='d-flex align-items-center'>
                <img className='rounded-5 me-2' src={theme ? PortfolioImage : PortfolioImageDark} height={'50px'} alt="" style={{ backgroundColor: 'red' }} />
                <h4 className='me-5'>
                    Abdul Latif
                </h4>
                <div className='d-flex'>
                    <h6 className='ms-5'>
                        <a className='text-reset' href="#homePage">Home</a>
                    </h6>
                    <h6 className='ms-5'>
                        <a className='text-reset' href="#educationPage">Education</a>
                    </h6>
                    <h6 className='ms-5'>
                        <a className='text-reset' href="#skillsPage">Skills</a>
                    </h6>
                    <h6 className='ms-5'>
                        <a className='text-reset' href="#projectsPage">Projects</a>
                    </h6>
                    <h6 className='mx-5'>
                        <a className='text-reset' href="#contactPage">Contact</a>
                    </h6>
                </div>
            </div>

            <button className='btn border rounded-circle' onClick={handleClick}>{theme ? <i class="fa-solid fa-moon text-white fs-5"></i> : <i class="fa-solid fa-sun text-warning fs-5"></i>}</button>
        </div>
    )
}

export default Header
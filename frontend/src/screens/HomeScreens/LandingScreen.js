import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function LandingScreen() {
  return (
    <div>
      {/* Welcome Section */}
          <div className='top'>
            <div className='top-content'>
              <strong>Boost Your Business with Janky Marketing</strong>
              
              <p>
              Unlock the Power of Digital Marketing
              </p>
            </div>
            <img src='/static/images/computer.jpg'/>
          </div>
          <div className="custom-shape-divider-bottom-1687040090">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
    </div>
  )
}

export default LandingScreen
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function ServicesScreen() {
  return (
    <div>
      {/* Our Services */}
      <div className='services'>
        <strong>Our Services</strong>
        <div className='services-content'>
          <div>
            <label htmlFor="cwa" className='service'>Social Media Management</label>
            <input type='checkbox' id='cwa'/>
            <p>
            Our second service focuses on providing comprehensive social media management solutions. Our team of experts will handle all aspects of your social media presence, from content creation to engagement and analytics. With our strategic approach, we will help you build a strong online brand and increase your reach and engagement.
            </p>
          </div>

          <div>
            <label htmlFor="mlda" className='service'>Branding and Promotion</label>
            <input type='checkbox' id='mlda'/>
            <p>
            Our first service is dedicated to effective branding and promotion. We will help you create a unique brand identity, develop a comprehensive marketing strategy, and execute impactful promotional campaigns. With our expertise, you can establish a strong brand presence and attract your target audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesScreen
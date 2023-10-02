import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function AboutScreen() {
  return (
    <div>
      {/* About Section  */}
      <div className='about'>
          <strong>About Janky Marketing</strong>
            <p>
            Welcome to Janky Marketing, a leading marketing agency specializing in social media marketing, advertisement, and content creation. We are dedicated to helping businesses establish a strong online presence and achieve their marketing goals. With our innovative solutions, metrics-driven approach, and collaborative mindset, we deliver exceptional results for our clients. Contact us today to learn more about how we can help your business thrive.
            </p>
       </div>       
    </div>
  )
}

export default AboutScreen
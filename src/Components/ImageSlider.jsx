// import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import CSS file for styling
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import hand from '../hands.jpg'
import crowd from '../crowd.jpg'
import vinly from '../vinly.jpg'


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <div>
     <Carousel>
      <Carousel.Item>
        <img src={hand} style={{height:'60vh',width:'100vw'}} />
        <Carousel.Caption>
          <h1 className='sell-your-music-h1'>SELL YOUR MUSIC Globally </h1>
          <p>Get in fronts of millions of users and fans. And make Money</p>
          <Button variant="primary" className="sign-up-btn">Sign Up Now</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={crowd} style={{height:'60vh',width:'100vw'}} />
        <Carousel.Caption>
          <h3 className='sell-your-music-h1'>SELL YOUR MUSIC Globally </h3>
          <p>Get in fronts of millions of users and fans. And make Money</p>
          <Button variant="primary" className="sign-up-btn">Sign Up Now</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={vinly} style={{height:'60vh',width:'100vw'}} />
        <Carousel.Caption>
          <h3 className='sell-your-music-h1'>SELL YOUR MUSIC Globally </h3>
          <p>
          Get in fronts of millions of users and fans. And make Money
          </p>
          <Button variant="primary" className="sign-up-btn">Sign Up Now</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;



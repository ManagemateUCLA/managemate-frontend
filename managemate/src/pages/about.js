import React from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <div className='background'>
        <div>
            logo here
        </div>
        <div className='column'>
            <h1>
                About
            </h1>
            <p>
                description
            </p>
        </div>
        <div className='row'>
            <Button className='button'>INVITE TO DISCORD</Button>
            <Button className='button'>LOGIN</Button>
        </div>
    </div>
    
  );
}

export default About;
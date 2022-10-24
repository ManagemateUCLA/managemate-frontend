import React from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import logo from '../components/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

function About() {
  return (
    <div className='background'>
        <div>
            <img src={logo}></img>
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
            <Link to='/Login'>
                <Button className='button'>LOGIN</Button>
            </Link>
        </div>
    </div>
    
  );
}

export default About;
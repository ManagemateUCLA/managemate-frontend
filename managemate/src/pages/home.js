import React from 'react';
import '../styles/general.css';
import logo from '../components/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

function Home() {
  return (
    <div className='background'>
        <div>
            <img src={logo}></img>
        </div>
        <div>
            header
        </div>
        <div>
            roommates
            <div className='row'>
                <h1>Roomates</h1>
                <p>button(Add a Roomate)</p>
            </div>
            <div className='column'>
                roomate list
            </div>
        </div>
        <Link to='/About'>About Page</Link>
    </div>
    
  );
}

export default Home;
import React from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import logo from '../components/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

function Schedule() {
  return (
    <div className='background'>
        <div>header of today's date and such</div>
        <div className='row'>
            <div className='column'>
                <Button>Create an Event</Button>
                <div>mini calendar</div>
                <h3>People</h3>
                <div>roommates</div>
            </div>
            <div>
                big calendar
            </div>
        </div>
        <Link to='/Home'>
            <Button className='button'>home</Button>
        </Link>
    </div>
  );
}

export default Schedule;
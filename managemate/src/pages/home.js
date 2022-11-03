import React from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import logo from '../components/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

function Home() {
  return (
    <div className='background'>
        <div>
            <img src={logo}></img>
        </div>
        <div className='row' 
            style={{width:'100%', backgroundColor:'#F6E5B6', padding: '8px'}}>
            <Link className='link' to='/Transaction'>Transaction History</Link>
            <Link className='link' to='/Schedule'>Roommate Calendar</Link>
        </div>
        <div className='column' style={{margin:'20px'}}>
            <div className='row'>
                <h1>Roomates</h1>
                <Button className='button' style={{padding:'10px'}}>Add a Roomate</Button>
            </div>
            <div className='column' style={{backgroundColor:'#FFFFFF', borderRadius:'20px'}}>
                <div style={styles.roommateCard}>
                    <p>First Last</p>
                    <p>Owes an amount</p>
                </div>
            </div>
        </div>
        <Link to='/About'>About Page</Link>
    </div>
    
  );
}

const styles = {
    roommateCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
  }

export default Home;
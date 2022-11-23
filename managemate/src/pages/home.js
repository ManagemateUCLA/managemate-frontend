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
            style={{width:'100%', backgroundColor:'#F6E5B6', padding: '8px 0px 8px 0px'}}>
            <Link className='link' to='/Transaction'>Transaction History</Link>
            <Link className='link' to='/Schedule'>Roommate Calendar</Link>
        </div>
        <div className='column' style={{width: '100%', margin:'20px', justifyContent: 'center', alignItems: 'center'}}>
            <div className='row' style={{width: '80%', marginBottom:'20px', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1 style={{margin: '0px'}}>Roomates</h1>
                <Button className='button' style={{height: '10%'}}>Add a Roomate</Button>
            </div>
            <div className='column' style={{width: '80%', backgroundColor:'#FFFFFF', borderRadius:'20px'}}>
                <div style={styles.roommateCard}>
                    <div className='row'>
                        <p>First Last</p>
                        <p>Owes an amount</p>
                    </div>
                    <div style={styles.bar}></div>
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
    },
    bar: {
        backgroundColor: "#4885ED",
        height: "3px",
        width: "90%",
    }
  }

export default Home;
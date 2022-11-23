import React from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import logo from '../components/logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    
  return (
    <div className='background'>
        <div>
            <Button className="logo" onClick={()=> navigate('/about')}><img src={logo}></img></Button>
        </div>
        <div className='row' 
            style={{width:'100%', backgroundColor:'#F6E5B6', padding: '8px'}}>
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
                    <div className='bar'></div>
                </div>
            </div>
        </div>
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
  }

export default Home;
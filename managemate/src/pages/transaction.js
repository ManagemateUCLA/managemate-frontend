import React from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import { HashLink as Link } from 'react-router-hash-link';

function Transaction() {
  return (
    <div className='background'>
        <div className='row' style={{width: '80%', backgroundColor:'#FFFFFF', borderRadius:'20px', alignItems: 'center'}}>
            <h3>First Last</h3>
            <p style={{color: '#D33610'}}>You owe: -$124</p>
            <p style={{color: '#1FD310'}}>You are owed: $148</p>
        </div>
        <div className='column' style={{width: '100%', margin:'20px', justifyContent: 'center', alignItems: 'center'}}>
            <div className='row' style={{width: '80%', marginBottom:'20px', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1 style={{margin: '0px'}}>Transaction History</h1>
            </div>
            <div className='column' style={{width: '80%', backgroundColor:'#FFFFFF', borderRadius:'20px'}}>
                <div style={styles.transactionCard}>
                    <div className='row' style={{marginBottom: '10px'}}>
                        <div style={{display: 'flex', flexDirection: 'row', width: '80%'}}>
                            <div style={styles.dateBox}>Oct 18</div>
                            <div>
                                <h3 style={{margin:'0px'}}>Boba</h3>
                                <p style={{marginBottom:'0px'}}>First Last paid ____</p>
                            </div>
                        </div>
                        <div style={{marginLeft: 'auto'}}>
                            <p>You borrowed ____</p>
                        </div>
                    </div>
                    <div className='bar'></div>
                </div>
            </div>
        </div>
        <Link to='/Home'>
            <Button className='button'>home</Button>
        </Link>
    </div>
    
  );
}

const styles = {
    transactionCard: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
    },
    dateBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5589D7",
        width: '10%',
        color: '#FFFFFF',
        fontSize: '18px',
        marginRight: '20px'
    }
  }

export default Transaction;
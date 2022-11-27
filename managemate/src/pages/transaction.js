import React, { useState, useEffect } from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Transaction() {
    const navigate = useNavigate();
    const [groupId, setGroupId] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const token = window.localStorage.getItem("userkey");
        console.log("token: ", token);
        async function getRoommateGroup() {
            try {
                const res = await axios.get("/roommateGroup/", {headers: {'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzYzNTM4YTY3NzJkZDM1ODdlZjM1MTkiLCJuYW1lIjoiaGFiaWJpIiwiZW1haWwiOiJoYWJpYmljYWZlQGhhYmliaS5jb20iLCJpYXQiOjE2NjkyNjU0MTl9.9ij_1LfduAQmuD4s6gLVxQJhGMF13Ice5SILmWlgrYw'}});
                console.log(res.data);
                setGroupId(res.data.gid);
            } catch (err) {
                console.error(err.response.data);
                alert("Could not get group id.");
            }
        }
        getRoommateGroup();

        // async function getTransactions() {
        //     try {
        //         const res = await axios.get("/finance/getTransactions", { gid: groupId });
        //         console.log(res.data);
    
        //     } catch (err) {
        //         console.error(err.response.data);
        //         alert("Could not load transactions.");
        //     }
        // }
        // getTransactions();
      }, []);

  return (
    <div className='background'>
        <div style={{width: '100%', paddingLeft: '10%', marginBottom: '20px'}}>
            <Button className='button' onClick={()=>navigate('/home')}>Home</Button>
        </div>
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
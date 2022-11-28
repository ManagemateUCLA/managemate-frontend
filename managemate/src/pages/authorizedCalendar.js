import React, {useEffect, useState} from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import logo from '../components/logo.png';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AuthorizedCalendar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const code = urlParams.get("code");
        console.log(code);
        const token = window.localStorage.getItem("userkey");

        async function passGcalToken() {
        try {
            const res = await axios.post("/user/addToken", { code: code }, { headers: {'auth-token': token}});
            //console.log(res.data);
            navigate('/home');

        } catch (err) {
            console.error(err.response.data);
        }
        }
        passGcalToken();
    }, []);
    
    return (
        <div className='background' style={{padding:'60px'}}>
            <div>
                <Button className="logo" onClick={()=> navigate('/about')}><img src={logo}></img></Button>
            </div>
            <div className='column'>
                <h1>
                    Google Calendar Authentication Sucessful! 
                </h1>
                <p>
                    Click below to go to home.
                </p>
            </div>
            <div className='column' 
                style={{width: '500px', display: 'flex', alignItems: 'center'}}>
                    <Button className='button' style={{width: '20%'}} onClick={()=> navigate('/home')}>Home</Button>
            </div>
        </div>
        
      );
  };

  export default AuthorizedCalendar;
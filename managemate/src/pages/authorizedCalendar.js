import React, {useState} from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import logo from '../components/logo.png';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AuthorizedCalendar = () => {
    function windowChange() {
        window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=396864400018-e27u1rs9plqvt5eacu2ln3u55l66lgcv.apps.googleusercontent.com&redirect_uri=https://localhost:8000&response_type=code&scope=https://www.googleapis.com/auth/calendar&access_type=offline";
    }
    return (
        <div>
            Hi!
            You did it!!!
        </div>
    )
  };

  export default AuthorizedCalendar;
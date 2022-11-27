import React, {useState} from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import logo from '../components/logo.png';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AuthorizingCalendar = () => {
    function windowChange() {
        window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=396864400018-qjupj3m1d2mg3uukq8frfh02i6krau6i.apps.googleusercontent.com&redirect_uri=http://localhost:3000/authorizedCalendar&response_type=code&scope=https://www.googleapis.com/auth/calendar&access_type=offline";
    }
    return (
        <div>
            Hi!
            <button onClick={windowChange}> windowChanger</button>
        </div>
    )
  };

  export default AuthorizingCalendar;
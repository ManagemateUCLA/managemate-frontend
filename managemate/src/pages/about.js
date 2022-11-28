import React, {useState} from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import logo from '../components/logo.png';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const About = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const register = async() => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("register-email").value;
        const discord = document.getElementById("register-discord").value;
        const password = document.getElementById("register-password").value;
        
        try {
            const res = await axios.post("/auth/register", { name: name, email: email, discordUserId: discord, password: password });
            console.log(res.data);
            window.localStorage.setItem("userkey", res.data.token);
            window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=396864400018-qjupj3m1d2mg3uukq8frfh02i6krau6i.apps.googleusercontent.com&redirect_uri=http://localhost:3000/authorizedCalendar&response_type=code&scope=https://www.googleapis.com/auth/calendar&access_type=offline"; 
        } catch (err) {
            console.error(err.response.data);
            alert("Please try again!");
        }
    };

    const login = async() => {
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        try {
            const res = await axios.post("/auth/login", { email: email, password: password });
            console.log(res.data);
            window.localStorage.setItem("userkey", res.data.token);
            navigate('/home');

        } catch (err) {
            console.error(err.response.data);
            alert("Either your email or your password is not recognized. Please try again!");
        }
    };

    const logout = () => {
        window.localStorage.clear();
        navigate('/about');
    }

  return (
    <div className='background' style={{padding:'60px'}}>
        <div>
            <Button className="logo" onClick={()=> navigate('/about')}><img src={logo}></img></Button>
        </div>
        <div className='column'>
            <h1>
                About
            </h1>
            <p>
                The bot offers a bulletin board for notifying your rommates of important messages, 
                a dynamic calendar that compiles rommate's schedules and assigns chores and a tool 
                for roommates to track bills and other shared expenses, so that everyone gets paid back.
            </p>
        </div>
        <div className='column' 
            style={{width: '500px', backgroundColor: '#FFFFFF', padding: '40px',
            borderRadius: '25px', margin:'20px'}}>
            {window.localStorage.getItem("userkey") ? 
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button className='button' onClick={()=> navigate('/home')}>Home</Button>
                    <Button className='button' onClick={logout}>Logout</Button>
                </div>
            : <div>{isLogin ? 
                <div>
                    <div className='formTab'>
                        <Button className='formButton' style={{padding: '10px 50px 10px 50px', backgroundColor: '#4885ED'}}
                        onClick={()=>setIsLogin(true)}>Login</Button>
                        <Button className='formButton' style={{padding: '10px 50px 10px 50px'}}
                        onClick={()=>setIsLogin(false)}>Register</Button>
                    </div>

                    <form className='form'>
                        <h2 style={{textAlign: 'center', marginTop: '0px'}}>Login:</h2>
                        <label>Email:</label>
                        <input type="text" id="login-email" />
                        <label>Password:</label>
                        <input type="password" id="login-password" />
                        <input className='formSubmit' value="Login" 
                        onClick={login}/>
                    </form> 
                </div>
                : 
                <div>
                    <div className='formTab'>
                        <Button className='formButton' style={{padding: '10px 50px 10px 50px'}}
                        onClick={()=>setIsLogin(true)}>Login</Button>
                        <Button className='formButton' style={{padding: '10px 50px 10px 50px', backgroundColor: '#4885ED'}}
                        onClick={()=>setIsLogin(false)}>Register</Button>
                    </div>

                    <form className='form'>
                        <h2 style={{textAlign: 'center', marginTop: '0px'}}>Register:</h2>
                        <label>Name:</label>
                        <input type="text" id="name" />
                        <label>Email: </label>
                        <input type="text" id="register-email" />
                        <label>Discord: </label>
                        <input type="text" id="register-discord" />
                        <label>Password: </label>
                        <input type="password" id="register-password" />
                        <input className='formSubmit' value="Sign Up" 
                        onClick={register}/>
                    </form> 
                </div>
            }</div>}   
        </div>
        <div className='row'>
            <Button className='button'>INVITE TO DISCORD</Button>
        </div>
    </div>
    
  );
  };

  export default About;
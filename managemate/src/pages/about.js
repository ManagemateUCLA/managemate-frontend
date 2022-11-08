import React, {useState} from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import logo from '../components/logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import axios from "axios";

const register = async() => {
    const name = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    console.log(name);
    const params = {
        name,
        email,
        password,
    };
    try {
        await axios.post("/auth/register", { params });
    } catch (err) {
        console.error(err.response.data);
        alert("Please try again!");
    }
};


const login = async() => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const params = {
        email,
        password,
    };
    try {
        const res = await axios.post("/auth/login", { params });
        console.log(res.data);
    } catch (err) {
        console.error(err.response.data);
        alert("Either your email or your password is not recognized. Please try again!");
    }
};

const About = () => {
    const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='background' style={{padding:'60px'}}>
        <div>
            <img src={logo}></img>
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
            {isLogin ? 
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
                    <input type="text" id="login-password" />

                    <input className='formSubmit' type="submit" value="Login" 
                    onClick={login}/>
                    
                    <Link to='/Home'>
                        <Button>Home</Button>
                    </Link>
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
                    <label>First Name:</label>
                    <input type="text" id="first" />
                    <label>Last Name:</label>
                    <input type="text" id="last" />
                    <label>Email: </label>
                    <input type="text" id="register-email" />
                    <label>Password: </label>
                    <input type="text" id="register-password" />
                    <input className='formSubmit' type="submit" value="Sign Up" 
                     onClick={register}/>
                </form> 
            </div>
            }     
        </div>
        <div className='row'>
            <Button className='button'>INVITE TO DISCORD</Button>
        </div>
    </div>
    
  );
  };

  export default About;
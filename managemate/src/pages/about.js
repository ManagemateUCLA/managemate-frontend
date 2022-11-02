import React, {useState} from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import logo from '../components/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const About = () => {
    const [isLogin, setIsLogin] = useState(true);

    function attemptLogin() {
        alert('loggin in!');
    }

    function register() {
        alert('registered!');
    }

  return (
    <div className='background'>
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
            borderRadius: '25px'}}>
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
                    <input type="text" name="login-email" />
                    
                    <label>Password:</label>
                    <input type="text" name="login-password" />

                    <input className='formSubmit' type="submit" value="Login" 
                    onClick={()=> attemptLogin()}/>
                    
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
                    <input type="text" name="first" />
                    <label>Last Name:</label>
                    <input type="text" name="last" />
                    <label>Email: </label>
                    <input type="text" name="register-email" />
                    <label>Password: </label>
                    <input type="text" name="register-password" />
                    <input className='formSubmit' type="submit" value="Sign Up" 
                     onClick={()=> register()}/>
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
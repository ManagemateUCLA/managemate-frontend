import React, {useState} from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../components/logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Home() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);
    const token = window.localStorage.getItem("userkey");
    console.log("userkey: ", window.localStorage.getItem("userkey"));
    
    const createGroup = async() => {
        const groupName = document.getElementById("group-name").value;
        const groupId = document.getElementById("group-id");

        try {
            const res = await axios.post("/roommateGroup/create", {groupName: groupName}, 
                { headers: {'auth-token': token}});
            console.log(res.data);

            groupId.innerText = "Group Code: " + res.data.gid;
        } catch (err) {
            console.error(err.response.data);
            groupId.innerText = "Something went wrong. Please try again.";
        }
    };
    
    const joinGroup = async() => {
        const groupCode = document.getElementById("group-code").value;
        const resultMessage = document.getElementById("result-message");

        try {
            const res = await axios.post("/roommateGroup/join", {gid: groupCode}, 
                { headers: {'auth-token': token}});
            console.log(res.data);

            resultMessage.innerText = "Successfully added!";
        } catch (err) {
            console.error(err.response.data);
            resultMessage.innerText = "You're already in the group or the code is invalid.";
        }
    };
    
  return (
    <div style={{position: 'relative'}}>      
        <div className='background'>
            <div>
                <Button className="logo" onClick={()=> navigate('/about')}><img src={logo}></img></Button>
            </div>
            <div className='row' 
                style={{width:'100%', backgroundColor:'#F6E5B6', padding: '8px 0px 8px 0px'}}>
                <Link className='link' to='/Transaction'>Transaction History</Link>
                <Link className='link' to='/Schedule'>Roommate Calendar</Link>
            </div>
            <div className='column' style={{width: '100%', margin:'20px', justifyContent: 'center', alignItems: 'center'}}>
                <div className='row' style={{width: '80%', marginBottom:'20px', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h1 style={{margin: '0px'}}>Roomates</h1>
                    <div>
                        <Button className='button' style={{height: '10%', marginRight: '10px'}} 
                            onClick={() => {setIsCreate(true); openModal();}}>Create a Group</Button>
                        <Button className='button' style={{height: '10%'}} 
                            onClick={() => {setIsCreate(false); openModal();}}>Join a Group</Button>
                    </div> 
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
        
        <Modal style={styles.modal} show={showModal} onHide={closeModal}>
            <Button className="button" style={{backgroundColor: '#4885ed'}} onClick={closeModal}>
                Close
            </Button>
            {isCreate ? 
            <Modal.Body>
               <form className='form'>
                    <h2 style={{textAlign: 'center', marginTop: '0px'}}>Create a Group</h2>
                    <label>Group Name:</label>
                    <input type="text" id="group-name" />
                    <input className='formSubmit' value="Create Group" 
                    onClick={createGroup}/>
                </form> 
                <p id="group-id" style={{padding: '10px'}}></p>
            </Modal.Body> 
            :
            <Modal.Body> 
                <form className='form'>
                    <h2 style={{textAlign: 'center', marginTop: '0px'}}>Join a Group</h2>
                    <label>Group Code:</label>
                    <input type="text" id="group-code" />
                    <input className='formSubmit' value="Join Group" 
                    onClick={joinGroup}/>
                </form> 
                <p id="result-message" style={{padding: '10px'}}></p>
            </Modal.Body>
            }
        </Modal>
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
    modal: {
        position: 'absolute', 
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -20%)',
        textAlign: 'center',
        backgroundColor: "#4885ed",
        padding: '20px',
        borderRadius: '20px',
    }
  }

export default Home;
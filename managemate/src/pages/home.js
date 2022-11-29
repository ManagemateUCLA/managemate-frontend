import React, {useState, useEffect} from 'react';
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
    const [bulletinBoardMessages, setBulletinBoardMessages] = useState([]);
    const [groupId, setGroupId] = useState(null);
    const [roommateList, setRoommateList] = useState([]);
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);
    const token = window.localStorage.getItem("userkey");
    console.log("userkey: ", window.localStorage.getItem("userkey"));

    useEffect(() => {
        const token = window.localStorage.getItem("userkey");
        console.log("token: ", token);
        async function getGroupId() {
            try {
                const res = await axios.get("/user/checkUserInGroup/", {headers: {'auth-token': token}});
                console.log("groupId: ", res.data.gid);
                setGroupId(res.data.gid);
            } catch (err) {
                console.error(err.response.data);
                console.log("Not in a group.");
            }
        }
        getGroupId();
      }, []);

      useEffect(() => {
        if(groupId) {
            async function getRoommateList() {
                try {
                    const res = await axios.get("/roommateGroup/"+groupId+"/listRoommates/");
                    console.log("Roommates: ", res.data);
                    setRoommateList(res.data);
                } catch (err) {
                    console.error(err.response.data);
                    console.log("Couldn't get roommates.");
                }
            }
            getRoommateList();

        async function getBulletinBoard() {
            try {
                const res = await axios.get("/bulletinBoard/", {headers: {'auth-token': token}});
                console.log("Messages: ", res.data);
                setBulletinBoardMessages(res.data);
            } catch (err) {
                console.error(err.response.data);
                console.log("No messages.");
            }
        }
        getBulletinBoard();
        }
      }, [groupId]);
    
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
            resultMessage.innerText = "Invalid code. Please try again.";
        }
    };
    
  return (
    <div style={{position: 'relative'}}>      
        <div className='background'>
            <div>
                <Button className="logo" onClick={()=> navigate('/about')}><img src={logo}></img></Button>
            </div>
            {groupId ? (
                <div style={{width: '100%'}}>
                <div className='row' 
                    style={{width:'100%', backgroundColor:'#F6E5B6', padding: '8px 0px 8px 0px'}}>
                    <Link className='link' to='/Transaction'>Transaction History</Link>
                    <Link className='link' to='/Schedule'>Roommate Calendar</Link>
                </div>
                <div className='column' style={{width: '100%', marginTop:'20px', marginBottom:'20px',mjustifyContent: 'center', alignItems: 'center'}}>  
                <h1 style={{marginBottom: '20px', width: '80%'}}>Roommates</h1>
                <div className='column' style={{width: '80%', backgroundColor:'#FFFFFF', borderRadius:'20px'}}>
                {roommateList.map((roommate, index) => (
                    <div style={styles.roommateCard}>
                        <p style={{width: '100%'}}>{roommate}</p>
                        <div className='bar'></div>
                    </div>
                ))}
                </div>
                <h1 style={{marginBottom: '20px', width: '80%'}}>Bulletin Board</h1>
                <div className='column' style={{width: '80%', backgroundColor:'#FFFFFF', borderRadius:'20px'}}>
                {bulletinBoardMessages.length === 0 && (
                    <div style={styles.messageCard}>
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                            <p style={{width: '100%'}}>No messages.</p>
                        </div>
                    </div>
                )} 
                {bulletinBoardMessages.map((message, index) => (
                    <div style={styles.messageCard}>
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                            <p style={{width: '20%', borderRight: '1px solid black', paddingRight: '4px'}}>{message.discordUserId}</p>
                            <p style={{paddingLeft: '4px'}}>{message.message}</p>
                        </div>
                        <div className='bar'></div>
                    </div>
                ))}
                </div>
                </div>
                </div>
            ) : (
                <div className='column' style={{width: '100%', marginTop:'20px', marginBottom:'20px',justifyContent: 'center', alignItems: 'center'}}> 
                <h1 style={{width: '80%', textAlign: 'center'}}>You are not in a roommate group. Please either create or join a group.</h1>
                <div className='row' style={{width: '50%', margin:'20px', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Button className='button' 
                            onClick={() => {setIsCreate(true); openModal();}}>Create a Group</Button>
                        <Button className='button' 
                            onClick={() => {setIsCreate(false); openModal();}}>Join a Group</Button>
                </div>
                </div>
            )}
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
    messageCard: {
        display: "flex",
        flexDirection: "column",
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
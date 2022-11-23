import React, {useState} from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../components/logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import {useNavigate} from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);
    
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
            <Button variant="secondary" onClick={closeModal}>
                Close
            </Button>
            {isCreate ? 
            <Modal.Body>
                <p>Roommate Group Code: #######</p>
            </Modal.Body> 
            :
            <Modal.Body>
                Input your roommate group code:
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
        backgroundColor: "#A6DCF0",
        padding: '20px',
        borderRadius: '20px',
    }
  }

export default Home;
import React from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";

function Transaction() {
    const navigate = useNavigate();
    const [roommateGroup, setRoommateGroup] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const token = window.localStorage.getItem("userkey");
        console.log("token: ", token);
        async function getRoommateGroup() {
            try {
                const res = await axios.get("/roommateGroup/", {headers: {'auth-token': token}});
                console.log("roommateGroup data: ", res.data);
                setRoommateGroup(res.data);
            } catch (err) {
                console.error(err.response.data);
                alert("Not in a group.");
            }
        }
        getRoommateGroup();

        async function getTransactions() {
            try {
                const res = await axios.get("/finance/getTransactions", { gid: roommateGroup.gid }, {headers: {'auth-token': token}});
                console.log("transaction data: ", res.data);
                setTransactions(res.data);
            } catch (err) {
                console.error(err.response.data);
                alert("Could not load transactions.");
            }
        }
        getTransactions();
      }, []);

  return (
    <div className='background'>
        <div style={{width: '100%', paddingLeft: '10%', marginBottom: '20px'}}>
            <Button className='button' onClick={()=>navigate('/home')}>Home</Button>
        </div>
        <div className='row' style={{width: '80%', backgroundColor:'#FFFFFF', borderRadius:'20px', alignItems: 'center'}}>
            <h3>{roommateGroup.name}</h3>
        </div>
        <div className='column' style={{width: '100%', margin:'20px', justifyContent: 'center', alignItems: 'center'}}>
            <div className='row' style={{width: '80%', marginBottom:'20px', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1 style={{margin: '0px'}}>Transaction History</h1>
            </div>
            <div className='column' style={{width: '80%', backgroundColor:'#FFFFFF', borderRadius:'20px'}}>
                {transactions.length === 0 && (
                <div style={styles.transactionCard}>
                    <div className='row'>
                        <p style={{margin:'0px'}}>No transactions.</p>
                    </div>
                </div>
                )}
                {transactions.map((transaction, index) => (
                <div style={styles.transactionCard}>
                    <div className='row' style={{marginBottom: '10px'}}>
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                            <div style={styles.dateBox}>{transaction.date}</div>
                            <div>
                                <h3 style={{margin:'0px'}}>{transaction.title}</h3>
                                <p style={{marginBottom:'0px'}}>{"Borrower(s): " + transaction.borrowers}</p>
                                <p style={{marginBottom:'0px'}}>Lender: {transaction.lender}</p>
                                <p style={{marginBottom:'0px'}}>Amount: {transaction.amount}</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='bar'></div>
                </div>
                ))}
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
        width: '20%',
        color: '#FFFFFF',
        fontSize: '18px',
        marginRight: '20px'
    }
  }

export default Transaction;
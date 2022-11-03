import React from 'react';
import '../styles/general.css';
import Button from 'react-bootstrap/Button';
import logo from '../components/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

function Transaction() {
  return (
    <div className='background'>
        <div>profile with total balance, owed money</div>
        <div className='row'>
            <h1>
                Transaction History
            </h1>
            <Button>Add an Expense</Button>
        </div>
        <div className='row'>
            transactions
        </div>
        <Link to='/Home'>
            <Button className='button'>home</Button>
        </Link>
    </div>
  );
}

export default Transaction;
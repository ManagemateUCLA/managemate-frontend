import React from 'react';
import '../styles/general.css';

function Home() {
  return (
    <div className='background'>
        <div>
            logo here
        </div>
        <div>
            header
        </div>
        <div>
            roommates
            <div className='row'>
                <h1>Roomates</h1>
                <p>button(Add a Roomate)</p>
            </div>
            <div className='column'>
                roomate list
            </div>
        </div>
    </div>
    
  );
}

export default Home;
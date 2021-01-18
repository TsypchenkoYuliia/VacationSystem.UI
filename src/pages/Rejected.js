import Navbar from '../components/Navbar';
import RejectedReviewsTable from '../components/RejectedReviewsTable';
import React, { useState } from 'react';


function Rejected(){
    const [name, setName] = useState('rejected');
    return <div className='content'>
            <Navbar></Navbar>
            <div>
            <RejectedReviewsTable/>     
            </div>
        </div>;
}

export default Rejected;
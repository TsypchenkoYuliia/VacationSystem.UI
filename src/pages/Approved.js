import Navbar from '../components/Navbar';
import ApprovedReviewsTable from '../components/ApprovedReviewsTable';
import React, { useState } from 'react';


function Approved() {
    const [name, setName] = useState('approved');
    return <div className='content'>
        <Navbar></Navbar>
        <div>
            <ApprovedReviewsTable />
        </div>
    </div>;
}

export default Approved;
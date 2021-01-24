import Navbar from '../components/Navbar';
import Table from '../components/ReviewsTable';
import React, { useState } from 'react';



function Reviews() {
    const [name, setName] = useState('review');
    return <div className='content'>
        <Navbar></Navbar>
        <div>
            <Table name={name} />
        </div>
    </div>;
}

export default Reviews;
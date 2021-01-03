
import './../css/Home.css';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom';
import {getUserById} from '../axios';


function Home() {

    let history = useHistory();

    getUserById(localStorage.getItem('userId'))
    .then((response) => {
        {response === null? history.replace('/login'): history.replace('/home')}
    }).catch(error=>{
        history.replace('/login');
    });

    return <div className='content'><Navbar></Navbar><div>Statistic:</div></div>;
}

export default Home;
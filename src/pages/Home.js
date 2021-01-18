
import './../css/Home.css';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom';
import {getUserById} from '../axios';


function Home() {

    let history = useHistory();

    {localStorage.getItem('role') === "Accountant" ? history.replace('/reviews'): history.replace('/home')}

    return <div className='content'><Navbar></Navbar><div>Statistic:</div></div>;
}

export default Home;
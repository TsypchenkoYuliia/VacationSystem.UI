import './../css/Header.css';
import logo2 from './../logo2.png';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {

    let history = useHistory();

    function LogOut() {
        localStorage.clear();
        window.location.href = ('/');
    };

    return <div className='header'>
        <img src={logo2}></img>
        <div className='avatar'>
            {localStorage.getItem('role') === null ? <div></div>: <Avatar
                style={{ margin: '15px', height: '40px', wight: '40px', color: '#D4F1F4', background: '#189AB4', fontSize: '20px', padding: '12px', fontFamily: 'Comic Sans', fontstyle: 'italic', textAlign:'center' }}
                onClick={(LogOut)}>
                logout
            </Avatar>}
        </div>
    </div>;
}

export default Header;
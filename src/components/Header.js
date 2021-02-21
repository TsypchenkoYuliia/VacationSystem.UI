import './../css/Header.css';
import logo2 from './../logo2.png';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {

    let history = useHistory();
    let [user, setUser] = useState();

    function LogOut() {
        localStorage.clear();
        window.location.href = ('/');
    };

    useEffect(() => {
        async function getAllData() {
            let name = "";
            let firstname = localStorage.getItem('firstname');
            let lasttname = localStorage.getItem('lastname');

            { firstname !== null && firstname != null ? name = firstname.charAt(0) + lasttname.charAt(0) : name = "" }
            setUser(name);
        }
        getAllData();
    }, []);

    return <div className='header'>
        <img src={logo2}></img>
        <div className='avatar'>
            <Avatar
                style={{ margin: '15px', height: '40px', wight: '40px', color: '#D4F1F4', background: '#189AB4', fontSize: '30px', padding: '8px', fontFamily: 'Comic Sans', fontstyle: 'italic' }}
                onClick={(LogOut)}>
                {user}
            </Avatar>
            </div>
    </div>;
}

export default Header;
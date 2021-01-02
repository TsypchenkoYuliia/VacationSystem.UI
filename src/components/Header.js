import './../css/Header.css';
import logo from './../logo.png';
import palm from './../palm.png';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Header() {

    let history = useHistory();
    
    function LogOut () {
        localStorage.clear();
        window.location.href=('/');
    };

    let name = "";
    let firstname = localStorage.getItem('firstname');
    let lasttname = localStorage.getItem('lastname');

    {firstname !== null && firstname != null? name = firstname.charAt(0)+ lasttname.charAt(0): name=""}
     

    return <div className='header'>
        <img src={logo}></img>
        <img className='palm' src={palm}></img>
        <div className='avatar'>
            <Avatar onClick={(LogOut)}>               
                {name}
            </Avatar></div>
    </div>;
}

export default Header;
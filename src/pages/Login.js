
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './../css/Login.css';
import PersonIcon from '@material-ui/icons/Person';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const sendForm = () => {

        const url = 'https://localhost:44397/login';
  
        axios.post(url, { username: username, password: password })
          .then((response) => {
            const { data } = response;
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('role', data.role);
            localStorage.setItem('firstname', data.firstname);
            localStorage.setItem('lastname', data.lastname);
  

            {data.role === 'Admin' ? history.push('/admin') : history.push('/requests')}
            
          })
          .catch(
            error => {
              console.log(error);
            }
            );
      };

    return (<div className='form'>
        <form noValidate autoComplete="off" className="login_form">
            <PersonIcon fontSize='large' className='icon' color='primary'>               
            </PersonIcon>
            <TextField 
            label="Login" 
            variant="outlined" 
            className='form-input'
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>   
            <br></br>
            <TextField 
            label="Password" 
            variant="outlined"
            className='form-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <br></br>
            <Button 
            size="large" 
            variant="contained" 
            color="orange" 
            className='login_btn'
            onClick={sendForm}>
                Login</Button>
        </form>
    </div>);
}

export default Login;
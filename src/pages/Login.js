
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './../css/Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputLabel from '@material-ui/core/InputLabel';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  const sendForm = () => {

    const url = 'https://vacationssystem.azurewebsites.net/login';

    axios.post(url, { username: username, password: password })
      .then((response) => {
        const { data } = response;
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('role', data.role);
        localStorage.setItem('firstname', data.firstname);
        localStorage.setItem('lastname', data.lastname);
        { data.role === 'Admin' ? history.push('/admin') : history.push('/home') }
      })
      .catch(
        error => {
          toast.error(error.message, {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      );
  };

  return (<div className='form'>
    <form noValidate autoComplete="off" className="login_form">
      <InputLabel 
      style={{ color:'#05445E', margin:'20px', fontSize:'20px', textTransform: 'uppercase', fontWeight:'700'}}
      id="demo-mutiple-checkbox-label">Vacations  system</InputLabel>
      <TextField
        label="Login"
        variant="outlined"
        className='form-input'
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <br></br>
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        className='form-input'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <br></br>
      <Button
        style={{ backgroundColor: '#05445E', color:'#D4F1F4', margin:'20px' }}
        variant="contained"
        onClick={sendForm}>
        Login</Button>
    </form>
  </div>);
}

export default Login;

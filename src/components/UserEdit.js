import React from 'react';
import { getUser } from '../axios';
import { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './../css/NewRequest.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { getAllManagers } from '../axios';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { UpdateUser } from '../axios';
import { useHistory } from 'react-router-dom';
import './../css/NewRequest.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

function RequestView() {
  let history = useHistory();
  let [user, setUser] = useState({});
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [phone, setPhone] = useState("");
  let [role, setRole] = useState("");
  const roles = ["Employee", "Manager"];

  useEffect(() => {
    async function getAllData() {
      await getUser(localStorage.getItem('employee')).then(({ data }) => {
        setUser(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setPhone(data.phoneNumber);
        setRole(data.role)
      });
    }
    getAllData();
  }, []);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);



  const emailChange = (event) => {
    setEmail(event.target.value)
  };

  const lastNameChange = (event) => {
    setLastName(event.target.value)
  };

  const firstNameChange = (event) => {
    setFirstName(event.target.value)
  };

  const passwordChange = (event) => {
    setPassword(event.target.value)
  };

  const phoneChange = (event) => {
    setPhone(event.target.value)
  };

  const handleChange = (event) => {
    setRole(event.target.value[0]);
    setPersonName(event.target.value);
  };

  //const back = () => {
  //history.replace('/requests');
  //};

  const sendRequest = () => {

    let newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role,
      phoneNumber: phone,
      id: user.id
    };

    UpdateUser(newUser).then(({ data }) => {
      toast.success("User updated", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    })
      .catch((err) => {
        toast.error(err.message, {
          position: toast.POSITION.BOTTOM_CENTER
        });
      });;
  };

  const back = () => {
    history.replace('/admin');
  };


  return <div>
    <TextField id="standard-basic" label="" onChange={firstNameChange} value="User editing:"
      style={{ marginLeft: '55px', height: '40px', wight: '400px', marginTop:'50px' }} />
    <div className='add-request'><div className='card'>
      <TextField id="standard-basic" label="" onChange={firstNameChange} label={user.firstName}
        style={{ margin: '15px', height: '40px', wight: '400px' }} />
      <TextField id="standard-basic" onChange={lastNameChange} label={user.lastName}
        style={{ margin: '15px', height: '40px', wight: '400px' }} />
      <TextField id="standard-basic" label={user.email} onChange={emailChange}
        style={{ margin: '15px', height: '40px', wight: '400px' }} />
      <TextField id="standard-basic" label={user.phoneNumber} onChange={phoneChange}
        style={{ margin: '15px', height: '40px', wight: '400px' }} />
      <Select
        style={{ margin: '5px', height: '40px', wight: '400px' }}
        labelId="demo-mutiple-chip-label"
        id="demo-mutiple-chip"
        multiple
        value={personName}
        onChange={handleChange}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}>
        {roles.map((name) => (
          <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <div className='containerBtn'>
        <Button
          variant="contained"
          color="orange"
          style={{ margin: 'auto', marginTop: '20px', height: '40px', wight: '40px', color: '#E7DFDD', background: '#ec4c2c' }}
          className='login_btn'
          onClick={sendRequest}>
          Update
          </Button>
        <Button
          variant="contained"
          color="orange"
          style={{ margin: 'auto', marginTop: '20px', height: '40px', wight: '40px', color: '#E7DFDD', background: '#188a05' }}
          className='login_btn'
          onClick={back}>
          To users
          </Button></div>
    </div></div></div>;
};

export default RequestView;
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './../css/NewRequest.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { getUsers } from '../axios';
import { getAllManagers } from '../axios';
import { postNewUser } from '../axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


function NewRequest() {

    let history = useHistory();

    if (localStorage.getItem('role') !== "Admin")
        history.replace('/login');

    const roles = ["Employee", "Manager"];

    let [users, setUsers] = useState("");
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [phone, setPhone] = useState("");
    let [role, setRole] = useState("");

    useEffect(() => {
        async function getAllData() {
            await getUsers().then(({ data }) => {
                setUsers(data);
            });
        }
        getAllData();
    }, []);

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
        setPersonName(event.target.value);
        setRole(event.target.value[0]);
    };

    function getStyles(name, roles, theme) {
        return {
            fontWeight:
                role.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }
    const [personName, setPersonName] = React.useState([]);
    const classes = useStyles();
    const theme = useTheme()

    const sendRequest = () => {

        // if(type === null || comment === ""){
        //toast.warn("Type is empty!", {
        //position: toast.POSITION.TOP_CENTER
        //});
        //return;
        //}

        postNewUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: role,
            phone: phone,
        }).then(({ data }) => {
            toast.success("User created", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        })
            .catch((err) => {
                toast.error(err.message, {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            });
    };


    return <div className='content'><Navbar></Navbar><div className='add-request'><div className='card'>
        <TextField id="standard-basic" label="FirstName" onChange={firstNameChange} />
        <TextField id="standard-basic" label="LastName" onChange={lastNameChange} />
        <TextField type="email" id="standard-basic" label="Email" onChange={emailChange} />
        <TextField id="standard-basic" label="Password" onChange={passwordChange} />
        <TextField id="standard-basic" label="Phone" onChange={phoneChange} />
        <Select
            style={{ margin: '15px', height: '40px', wight: '400px' }}
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
        <Button
            variant="contained"
            color="orange"
            style={{ margin: '15px', height: '40px', wight: '40px', color: '#E7DFDD', background: '#ec4c2c' }}
            className='login_btn'
            onClick={sendRequest}>
            Add
          </Button>
    </div></div></div>;
}

export default NewRequest;
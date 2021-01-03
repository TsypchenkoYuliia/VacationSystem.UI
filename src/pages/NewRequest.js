import { useEffect, useState} from 'react';
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
import Button  from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import {getUserById} from '../axios';
import {getAllManagers} from '../axios';
import {postNewRequest} from '../axios';
import moment from 'moment';


const vacation = [
    { title: 'Administrative' },
    { title: 'Annual' },
    { title: 'Study' },
    { title: 'Sick' }];
       
function NewRequest(){

  let history = useHistory();

  let [data, setData] = useState([]);
  let [dataId, setDataId] = useState([]);
  let [reviwersId, setReviwersId] = useState([]);
  let [type, setType] = useState("");
  let [start, setStart] = useState("");
  let [end, setEnd] = useState("");
  let [comment, setComment] = useState("");

    getUserById(localStorage.getItem('userId'))
    .then((response) => {
        {response === null? history.replace('/login'): history.replace('/newrequest')}
    }).catch(error=>{
        history.replace('/login');
    });

    useEffect(() => {
      async function getAllData() {
        await getAllManagers().then(({ data }) => {
            setDataId(data);
            let arr = data;
            let reviewers = arr.map((item) => {
            return item.firstName.concat(' ', item.lastName);
          });
            setData(reviewers);
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

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const autocompleteChange = (event) => {
    setType(event.target.innerText)
  };

  const endDateChange = (event) => {
    setEnd(event.target.value)
  };

  const startDateChange = (event) => {
    setStart(event.target.value)
  };

  const commentChange = (event) => {
    setComment(event.target.value)
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
    const theme = useTheme()
    const [personName, setPersonName] = React.useState([]);

    const sendRequest = ()=>{

      let ids = [];
      ids.push('498f801b-3af8-4795-a6cc-69a25588c8cb');

      personName.map((item)=>{
        dataId.map((user) =>{
          if(user.firstName.concat(' ', user.lastName) === item)
          {ids.push(user.id)}
        });
      });

      setReviwersId(ids);

      if(type === 'Administrative')
        type = 1
      else if(type === 'Annual')
        type = 2
      else if(type === 'Study')
        type = 3
      else if(type === 'Sick')
        type = 4

      postNewRequest({
        leaveType:type,
        startDate: moment(start._d).format('YYYY-MM-DD').toString(),
        endDate: moment(end._d).format('YYYY-MM-DD').toString(),
        reviewsId: ids,
        comment:comment,
        userId: localStorage.getItem('userId'),
      });
    };

    return <div className='content'><Navbar></Navbar><div className='add-request'><div className='card'>
        <Autocomplete id="combo-box-demo" onChange={autocompleteChange}
            options={vacation}
            getOptionLabel={(option) => option.title}
            style={{ width: 350, margin:'15px', height:'30px'}}
            renderInput={(params) => <TextField {...params} label="Vacation type" variant="outlined" />}/>
        <div className='dates'>
          <TextField id="date" className='date' label="Start date" type="date"
        defaultValue="2021-01-01" onChange={startDateChange}
        style={{margin:'15px', color:'#ec4c2c'}}
        InputLabelProps={{shrink: true,}}/>
          <TextField id="date" className='date' label="End date" type="date"
        defaultValue="2021-01-01" onChange={endDateChange}
        style={{margin:'15px'}}
        InputLabelProps={{shrink: true,}}/>
        </div>

          <TextField id="standard-basic" label="Comment" onChange={commentChange}/>  

          <InputLabel id="demo-mutiple-checkbox-label">Reviewers:</InputLabel>
          <Select
          style={{margin:'15px', height:'40px', wight:'400px'}}
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
          {data.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
          </Select>
          <Button 
            variant="contained" 
            color="orange" 
            style={{margin:'15px', height:'40px', wight:'40px', color:'#E7DFDD', background:'#ec4c2c'}}
            className='login_btn'
            onClick={sendRequest}>
            Send
          </Button>
        </div></div></div>;
}

export default NewRequest;
import React from 'react';
import {getRequest} from '../axios';
import { useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './../css/NewRequest.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {getAllManagers} from '../axios';
import Button  from '@material-ui/core/Button';
import moment from 'moment';
import {updateRequest} from '../axios';
import { useHistory } from 'react-router-dom';



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

function RequestView()
{
    let history = useHistory();
    let [request, setRequest] = useState({});
    let [type, setType] = useState("");
    let [start, setStart] = useState("");
    let [end, setEnd] = useState("");
    let [comment, setComment] = useState("");
    const [personName, setPersonName] = React.useState([]);
    let [dataManagers, setDataManagers] = useState([]);
    let [dataId, setDataId] = useState([]);
    let [reviwersId, setReviwersId] = useState([]);

    

    const vacation = [
        { title: 'Administrative' },
        { title: 'Annual' },
        { title: 'Study' },
        { title: 'Sick' }];

    useEffect(() => {
        async function getAllData() {
          await getRequest(localStorage.getItem('request')).then(({ data }) => {
            setRequest(data);

            });
        }
       getAllData();
      }, []);

      useEffect(() => {
        async function getAllData() {
          await getAllManagers().then(({ data }) => {
              setDataId(data);
              let arr = data;
              let reviewers = arr.map((item) => {
              return item.firstName.concat(' ', item.lastName);             
            });
            
            setDataManagers(reviewers);
            


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
        const theme = useTheme()
      

      const endDateChange = (event) => {
        setEnd(event.target.value)
      };
    
      const startDateChange = (event) => {
        setStart(event.target.value)
      };

      const commentChange = (event) => {
        setComment(event.target.value)
      };

      const autocompleteChange = (event) => {
        setType(event.target.innerText)
      };

      const handleChange = (event) => {
        setPersonName(event.target.value);
      };

      const back =() =>{
        history.replace('/requests');
      };
      
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
  
        let newRequest = {
            leaveType:type,
            startDate: moment(start).format('YYYY-MM-DD').toString(),
            endDate: moment(end).format('YYYY-MM-DD').toString(),
            reviewsId: ids,
            comment:comment,
            userId: localStorage.getItem('userId')};

        updateRequest(request.id, newRequest);
      };


    return <div><div className='add-request'><div className='card'>
        
       

        <Autocomplete id="combo-box-demo" onChange={autocompleteChange}
            options={vacation}
            //defaultValue = { vacation[request.type] }
            getOptionLabel={(option) => option.title}
            style={{ width: 350, margin:'15px', height:'30px'}}
            renderInput={(params) => <TextField {...params} label="Vacation type" variant="outlined" />}/>
    
        <div className='dates'>
          <TextField id="date" className='date' label="Start date" type="date"
        value={moment(request.startDate).format('YYYY-MM-DD').toString()} onChange={startDateChange}
        style={{margin:'15px', color:'#ec4c2c'}}
        InputLabelProps={{shrink: true,}}/>
          <TextField id="date" className='date' label="End date" type="date"
        value={moment(request.endDate).format('YYYY-MM-DD').toString()} onChange={endDateChange}
        style={{margin:'15px'}}
        InputLabelProps={{shrink: true,}}/>
        </div>

        <TextField id="standard-basic" onChange={commentChange} value={request.comment}/> 
        <InputLabel id="demo-mutiple-checkbox-label">Reviewers:</InputLabel>
        <InputLabel id="demo-mutiple-checkbox-label">1. Accounting department</InputLabel>
        <InputLabel id="demo-mutiple-checkbox-label">Managers:</InputLabel>

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
          {dataManagers.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
          </Select>
            <div className='containerBtn'>
          <Button 
            variant="contained" 
            color="orange" 
            style={{margin:'auto', marginTop:'20px', height:'40px', wight:'40px', color:'#E7DFDD', background:'#ec4c2c'}}
            className='login_btn'
            onClick={sendRequest}>
            Change
          </Button>
          <Button 
            variant="contained" 
            color="orange" 
            style={{margin:'auto', marginTop:'20px', height:'40px', wight:'40px', color:'#E7DFDD', background:'#188a05'}}
            className='login_btn'
            onClick={back}>
            Cancel
          </Button>
          </div>
    </div>
    </div></div>;
};

export default RequestView;
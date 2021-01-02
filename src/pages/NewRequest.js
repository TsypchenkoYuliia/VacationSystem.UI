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

const top100Films = [
    { title: 'Administrative' },
    { title: 'Annual' },
    { title: 'Study' },
    { title: 'Sick' }]

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


function NewRequest(){

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

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  
    const classes = useStyles();
    const theme = useTheme()
    const [personName, setPersonName] = React.useState([]);


    const sendRequest = ()=>{


    };

    return <div className='content'><Navbar></Navbar><div className='add-request'><div className='card'>
        <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 350, margin:'15px', height:'30px'}}
            renderInput={(params) => <TextField {...params} label="Vacation type" variant="outlined" />}/>
<div className='dates'>
      <TextField
        id="date"
        className='date'
        label="Start date"
        type="date"
        defaultValue="2021-01-01"
        style={{margin:'15px', color:'#ec4c2c'}}
        InputLabelProps={{
          shrink: true,
        }}/>
      <TextField
        id="date"
        className='date'
        label="End date"
        type="date"
        defaultValue="2021-01-01"
        style={{margin:'15px'}}
        InputLabelProps={{
          shrink: true,
        }}/>
</div>
      <TextField id="standard-basic" label="Comment" />  

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
          {names.map((name) => (
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
                Send</Button>
        </div></div></div>;;
}

export default NewRequest;
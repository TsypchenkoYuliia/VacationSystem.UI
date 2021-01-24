
import './../css/Home.css';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStatistic } from '../axios';
import { getType } from '../types';
import { InputLabel } from '@material-ui/core';
import UserCalendar from '../components/Calendar';

toast.configure();


function Home() {

    let history = useHistory();

    const [statistic, setStatistic] = useState([]);
    const [events, setEvents] = useState(null);


    useEffect(() => {
        async function getAllData() { 
          await getStatistic().then(({ data }) => {
            setStatistic(data);   
            toast.success("Statistics updated", {
                position: toast.POSITION.BOTTOM_CENTER
            })
            });    
        }
       getAllData();
      }, []);

    { localStorage.getItem('role') === "Accountant" ? history.replace('/reviews') : history.replace('/home') }

    return <div className='content'><Navbar></Navbar><div>
        <TextField id="standard-basic" value='Statistics of consumed days of the current year:' style={{ minWidth: '400px', margin: '20px', marginLeft: '100px' }} />

        <div className='chipContainer' style={{ marginLeft: '80px'}}>

            {statistic.map((item) =>
                <Chip avatar={<Avatar style={{ marginRight: '10px', color:'#ec4c2c', fontSize:'20px', width:'50px', height:'50px' }}>{item.days}</Avatar>}
                    label={getType(item.typeId)}
                    variant="outlined"
                    style={{ minWidth: '200px', margin: '10px', marginLeft: '20px', width:'150px', height:'70px'}}
                    />
            )}
        </div>
        <UserCalendar></UserCalendar>
    </div></div>;
}

export default Home;
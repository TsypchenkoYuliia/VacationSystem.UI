
import Popup from 'reactjs-popup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import { getStatisticById } from '../axios';
import { getType } from '../types';
import './../css/Home.css';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { countDays } from '../countDays';
import { InputLabel } from '@material-ui/core';


function StatisticData(props) {

    const [statistic, setStatistic] = useState([]);

    let days = (new Date(props.request.endDate) - new Date(props.request.startDate)) / 86400000 + 1;


    useEffect(() => {
        async function getAllData() {
            await getStatisticById(props.request.user.id).then(({ data }) => {
                setStatistic(data);
            });
        }
        getAllData();
    }, []);

    return <div><Popup
        trigger={<Button>days</Button>} position="right center">
        <div className='statContainer'>
            <InputLabel style={{ minWidth: '120px', marginTop: '5px' }}>Current request:</InputLabel>
            <InputLabel style={{ marginTop: '5px', marginLeft: '10px' }}>{getType(props.request.type)}</InputLabel>
            <InputLabel style={{ marginTop: '5px', marginLeft: '10px' }}>{days}</InputLabel>
            <InputLabel style={{ marginTop: '5px', marginBottom: '10px' }}>d.</InputLabel>

        </div>
        {statistic.map((item) =>
            <div className='statContainer'>
                <DateRangeIcon></DateRangeIcon>
                <InputLabel style={{ minWidth: '120px', marginTop: '5px' }}>{getType(item.typeId)}</InputLabel>
                <InputLabel style={{ marginTop: '5px', marginLeft: '5px' }}>used</InputLabel>
                <InputLabel style={{ marginTop: '5px', marginLeft: '5px', color: "#ec4c2c" }}>{item.days}</InputLabel>
                <InputLabel style={{ marginTop: '5px', marginLeft: '5px' }}>from</InputLabel>
                <InputLabel style={{ marginTop: '5px', marginLeft: '5px' }}>{countDays(item.typeId)}</InputLabel>
                <InputLabel style={{ marginTop: '5px' }}>, available</InputLabel>
                <InputLabel style={{ marginTop: '5px', marginLeft: '5px', color: "#188a05" }}>{countDays(item.typeId) - item.days}</InputLabel>
            </div>)}
    </Popup></div>
}

export default StatisticData;
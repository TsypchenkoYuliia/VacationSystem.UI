
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './../css/Home.css';


const events = [
    {
        start: '2021-01-01',
        end: '2021-10-02'
    },
    {
        start: '2015-07-19',
        end: '2015-07-25'
    },
];


function UserCalendar() {

  return (
    <div>
      <Calendar
         
      />
    </div>
  );
}

export default Calendar;
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';// Import the default styling

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    // Perform any additional logic when the date changes
  };

  return (
    <div className='calendar'>
      <h2>Select a Date</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
    </div>
  );
}

export default MyCalendar;

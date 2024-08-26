import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        onChange={handleDateChange}
        value={date}
        style={{ height: '100%' }}
      />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;

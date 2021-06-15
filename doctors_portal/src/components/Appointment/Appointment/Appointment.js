import React, { useState, useEffect } from 'react';
import Footer from '../../SharedComponent/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)
    }
   
    return (
        <div>
       
            <AppointmentHeader handleDateChange={handleDateChange}/>
            <BookAppointment date={selectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;
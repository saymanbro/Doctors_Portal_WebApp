import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './AppointmentHeader.css';
import chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleDateChange}) => {
 return (
        <div className="container my-5 appointment_header">
            <div className="row mt-5 align-items-center">
                <div className="col-md-6">
                    <h1>Appointment</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6 my-3">
                  <img src={chair} className="w-100" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHeader;
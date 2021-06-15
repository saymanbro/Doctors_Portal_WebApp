import React, { useState, useEffect } from 'react';
import ByDate from '../AppointmentsByDate/ByDate';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
const containerStyle={
    background: '#F4FDFB',
    height:'100vh',
    width:'100%'
}

const Deshbord = () => {


    const [appointment, setAppointment] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)
    }
    
  


                    /// To Show appointment by clicking date ///
  useEffect(() =>{
    fetch('https://doctorportals.herokuapp.com/AppointmentByDate',{
        method:"POST",
        headers:{'content-type': 'application/json'},
        body: JSON.stringify({date: selectedDate})
    })
    .then(res => res.json())
    .then(data =>{
     setAppointment(data)
    })
  },[selectedDate])
    
    return (
        <section style={containerStyle} className='container-fluid row '>
        <div className="col-md-3">
         <Sidebar/>
        </div>
        <div className=" col-md-3  ">
       <div className="">
           <h3>Appointment</h3>
       <div>
        <Calendar 
                        onChange={handleDateChange}
                        value={new Date()}
                    /> 
                    <br/>
                    <br/>
                    <h5 className="text-primary fw-bold mt-5"> **Click date to see patients appointment </h5>
        </div>
       </div>
        </div>
        <div className="col-md-6">
            <ByDate  appointments={appointment}/>
        </div>
        
    </section>
    );
};

export default Deshbord;
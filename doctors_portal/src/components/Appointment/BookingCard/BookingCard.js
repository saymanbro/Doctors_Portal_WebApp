import React, { useState } from 'react';
import AppointmentForm from '../AppoitmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
   
    function closeModal(){
      setIsOpen(false);
    }
   
    return (
        <div className='col-md-4 text-center  my-2'>
            <div className="card" style={{width:'18rem'}}>
            <div className="card-body">
                <h5 className="card-title common_color">{booking.title}</h5>
                <h6 className="card-subtitle mb-2 ">{booking.date}</h6>
                <small>{booking.set} Space Available</small> <br/>
                <button onClick={openModal} className='common_btn'>{booking.btn}</button>
              <AppointmentForm modalIsOpen={modalIsOpen} bookingSub={booking.title} date={date} closeModal={closeModal}/>
            </div>
            </div>
        </div>
    );
};

export default BookingCard;
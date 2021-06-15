import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingCard = [
    {
        title:'Teeth Ordthology',
        date:'5pm - 10pm',
        set:'10',
        btn:'Book Appointment'
    },
    {
        title:'Cosmetic Dentistry',
        date:'5pm - 10pm',
        set:'10',
        btn:'Book Appointment'
    },
    {
        title:'Teeth Cleaning',
        date:'02pm - 80pm',
        set:'10',
        btn:'Book Appointment'
    },
    {
        title:'Cavity Protection',
        date:'5pm - 10pm',
        set:'10',
        btn:'Book Appointment'
    },
    {
        title:'Teeth Ordthology',
        date:'10am - 05pm',
        set:'10',
        btn:'Book Appointment'
    },
    {
        title:'Teeth Ordthology',
        date:'2pm - 12am',
        set:'10',
        btn:'Book Appointment'
    }
]
const BookAppointment = ({date}) => {
    return (
        <section className='container'>
            <h2 className='text-center' style={{color:'#1cc7c1'}}>Available Appointment On {date.toDateString()}</h2>
            <div className="row justify-content-around my-5">
                {
                    bookingCard.map(booking => <BookingCard booking={booking} date={date}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;
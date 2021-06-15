import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')

const AppointmentForm = ({modalIsOpen, closeModal,bookingSub, date}) => {
    const { register, handleSubmit} = useForm();
  const onSubmit = data => {
      data.service = bookingSub;
      data.date = date;
      data.created = new Date();
     
      fetch('https://doctorportals.herokuapp.com/registeredAppointment',{
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(data)
      }) 
      .then(res => res.json())
      .then(success=>{
       
        if(success){
          closeModal()
          alert('Your Appointment registered SuccessFully')
        }
      })
      
    };
   
    return (
        <div>
             <div>
       
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 className="text-center common_color my-3">{bookingSub}</h2>
          <p className='text-center text-secondary'>{date.toDateString()}</p>
          <form onSubmit={handleSubmit(onSubmit)}>       
         <input type="text" name='name'  className="form-control" ref={register} style={{width:'100%'}} placeholder='Your Name'/> <br/>
         <input type="text" name='email'  className="form-control" ref={register} placeholder='Your Email'/> <br/>
         <input type="number" name='number' className="form-control" ref={register} placeholder='Phone Number'/> <br/>
        
         <input type="text" name='weight' className="form-control" ref={register} placeholder='weight'/> 
           
      <input className="common_btn mt-3 mx-auto" type="submit" />
    </form>
        </Modal>
      </div>
        </div>
    );
};

export default AppointmentForm;
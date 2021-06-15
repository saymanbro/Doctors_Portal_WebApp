import React from 'react';
import './Sidebar.css';
import {RiCalendar2Line} from 'react-icons/ri'
import {RiTableLine} from 'react-icons/ri'
import {BsFillPeopleFill} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {Link} from 'react-router-dom'
const sidebarStyle = {
    height:'100vh',
    width:'100%'
    
}
const Sidebar = () => {
    return (
       
        <section style={sidebarStyle} className='gradient_background'>
           <div className="sideNav">
               <ul>
                   <li> <Link className='link' to='/Patient_bord'> <RiTableLine className='ms-3 '/>    DeshBord</Link></li>
                   <li> <Link className='link' to='/deshbord'><RiCalendar2Line className='ms-3 '/>   Appointment</Link></li>
                   <li> <Link className='link' to='/all_patient'><BsFillPeopleFill className='ms-3 '/>   Patients</Link> </li>
                   <li><Link className='link' to='/add_doctor' ><FiSettings className='ms-3 '/>  Add Doctor</Link></li>
               </ul>
           </div>       </section> 
    );
};

export default Sidebar;
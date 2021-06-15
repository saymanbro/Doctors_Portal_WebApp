import React, { useState } from 'react';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';

const AllPatient = () => {
    const [patientInfo, setPatientInfo] = useState([]);
    fetch('https://doctorportals.herokuapp.com/patients')
    .then(res => res.json())
    .then(info => setPatientInfo(info))
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar/>
                </div>
                <div className="col-md-9">
                    <h1 className='common_color'> Patients</h1>
                    <div className="patient_info">
                        <table>
                            <thead>
                               <tr>
                               <th className='px-3'>Sr No:</th>
                                <th className='px-3'>Name</th>
                                <th className='px-3'>Email</th>
                                <th className='px-3'>Phone</th>
                                <th className='px-3'>Service</th>
                                <th className='px-3'>Date</th>
                               </tr>
                            </thead>
                            <tbody>
                                {
                                    patientInfo.map((info, index) =>
                                        <tr>
                                            <td className='px-3'>{index+1}</td>
                                            <td className='px-3'>{info.name}</td>
                                            <td className='px-3'>{info.email}</td>
                                            <td className='px-3'>{info.number}</td>
                                            <td className='px-3'>{info.service}</td>
                                            <td className='px-3'> {info.date}</td>

                                           
                                        </tr>
                                        )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPatient;
import React from 'react';
const ByDate = ({appointments }) => {
    return (
      
        <div >
           
           <h4 className='common_color mb-5'>Appointment</h4>
           <table className='info'>
             <thead>
                     
               <tr>
                   <th className='px-5'>Name</th> 
                   <th className='px-5'>Phone</th>
                   <th className='px-5'>Email</th>
               </tr>
             </thead>
               <tbody>
                   {
                       appointments.map( appoint => 
                        <tr>
                             <td className="px-5">{appoint.name}</td>
                             <td className="px-5">{appoint.number}</td>
                             <td className="px-5">{appoint.email}</td>
                        </tr>
                        )
                   }
               </tbody>
           </table>

        </div>
    );
};

export default ByDate;
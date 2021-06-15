import React, { useState } from 'react';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';

const AddDoctor = () => {
    const [addDoctor, setAddDoctor] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e =>{
        const newInfo = {...addDoctor}
        newInfo[e.target.name] =[e.target.value]
        setAddDoctor(newInfo)
    }
    const handleFileChange = e =>{
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const handleSubmit = () =>{
        const formData = new FormData()
  formData.append('file', file)
  formData.append('name', addDoctor.name)
  formData.append('email', addDoctor.email)

  fetch('https://doctorportals.herokuapp.com/addDoctor', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
}
    
    return (
        <div className='container'>
             <div className="row">
                 <div className="col-md-3">
                    <Sidebar/>
                 </div>
                 <div className="col-md-9">
                     <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="Name" onBlur={handleBlur} name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="text"  onBlur={handleBlur} name='email' className="form-control" id="exampleInputPassword1" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Upload a image</label>
                    <input type="file" className="form-control" onChange={handleFileChange} placeholder="file"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                 </div>
             </div>
           
        </div>
    );
    };

export default AddDoctor;
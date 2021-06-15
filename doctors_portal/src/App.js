import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/LogIn/Login';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import Deshbord from './components/DeshBord/Deshbord/DesBord';
import AllPatient from './components/DeshBord/AllPatient/AllPatient';
import AddDoctor from './components/DeshBord/AddDoctor/AddDoctor';
import Navbar from './components/SharedComponent/Navbar/Navbar';

 export const  UserContext = createContext();

function App() {
  const [loggedUser, setLoggedUser] = useState({});
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
<Router>
<Navbar />
      <Switch>
    
        <Route  path="/home">
          <Home></Home>
        </Route>
        <Route path="/deshBord">
        <Deshbord/>
        </Route>
        <Route path='/all_patient'>
          <AllPatient/>
        </Route>
        <PrivateRoute path='/appointment'>
         <Appointment/>
        
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/add_doctor'>
          <AddDoctor/>
        </Route>
        <Route path='*'>
          <Home/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;

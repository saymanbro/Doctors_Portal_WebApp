import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import logimg from '../../images/logimg.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    let history = useHistory();
    let location = useLocation();
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  let { from } = location.state || { from: { pathname: "/" } };
   const signInHandle = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
    
        var user = result.user;
        console.log(user);
        setLoggedUser(user)
        history.replace(from);
      }).catch((error) => {
        var errorMessage = error.message;  var provider = new firebase.auth.GoogleAuthProvider();
      });
   }
    return (
        <div className='container' >
                <div className="row text-center align-items-center">
                   
                <div className="col-12 col-md-4 order-1 order-md-0 mt-5 mt-md-0">
                <h1 className='text-center common_color'>Sign In With Google</h1>
                   <button className='common_btn  ' onClick={signInHandle}>Sign-In</button>
                </div>
                <div className="col-12 col-md-8 order-0  order-md-1">
                <img src={logimg} className='w-100 img-fluid' alt=""/>
                </div>


                   
                </div>

          
        </div>
    );
};

export default Login;
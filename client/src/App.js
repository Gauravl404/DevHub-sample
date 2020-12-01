
import React, { Fragment, useState,useEffect } from 'react'
import { BrowserRouter as Router, Switch,Route,Redirect } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';


import SignIn from './components/authentication/SignIn'
import SignUp from './components/authentication/SignUp'
import Dashboard from './components/layout/Dashboard'

toast.configure();




function App() {
  //let authenticated = localStorage.getItem("token")
   const [IsAuthenticated, setIsAuthenticated] = useState(false);
   const setAuth = boolean => {
     setIsAuthenticated(boolean);
   }

  

   async function isAuth(){
     try {
       const response = await fetch("http://localhost:5000/auth/is-verify",{
         method:"GET",
         headers:{token:localStorage.token}
       });

       const parseRes = await response.json();
       //console.log(parseRes);

       parseRes===true ? setIsAuthenticated(true):setIsAuthenticated(false);


       
     } catch (err) {
       console.error(err.message);
       
     }

   }

   useEffect(() => {
     isAuth()
   });
  return (
    <Fragment>
      <Router>
        <div>
          <Switch>
            <Route exact path='/SignIn' render={props => !IsAuthenticated?<SignIn {...props} setAuth = {setAuth}></SignIn>:<Redirect to='/Dashboard'></Redirect>}></Route>
            <Route exact path='/SignUp' render={props => !IsAuthenticated?<SignUp {...props} setAuth = {setAuth}></SignUp>:<Redirect to='/Dashboard'></Redirect>}></Route>
            <Route exact path='/Dashboard' render={props => IsAuthenticated? <Dashboard {...props} setAuth = {setAuth}></Dashboard>:<Redirect to = '/SignIn'></Redirect>}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;

import React from 'react'
import {Route} from 'react-router-dom'
import Login from './Login'


const Auth = (props) => { 
    return (
        <>
        <Route path = '/auth/login'>
            <Login newUser={props.newUser}/>
            </Route>
          
   
        <Route path='/signup'>
            <div>Signup</div>
        </Route> 
        </>
    )
}

export default Auth
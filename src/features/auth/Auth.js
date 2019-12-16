import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'
import Login from './Login'


const Auth = (props) => { 
    return (
        <>
        <Route path = '/auth/login'>
            <Login setUser={props.setUser}/>
            </Route>
          <Login/>
   
        <Route path='/signup'>
            <div>Signup</div>
        </Route> 
        </>
    )
}

export default Auth
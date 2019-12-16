import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'



const Auth = (props) => { 
    return (
        <>
        <Route path = '/login'>
          <div>login</div>  
  


            
        </Route> 
        <Route path='/signup'>
            <div>Signup</div>
        </Route> 
        </>
    )
}

export default Auth
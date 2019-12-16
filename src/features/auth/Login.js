import React, {Fragment, useState} from 'react'
import {Route} from 'react-router-dom'



const Login = props => { 
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    return (
       <form>
           <input type='email' placeholder='email' name='email' value={email} onChange={e =>setEmail(e.target.value)}/>
           <input type='password' placeholder='password' name='password' value={email} onChange={e =>setPassword(e.target.value)}/>
            <input type ='submit'/>
       </form>
    )
}

export default Login
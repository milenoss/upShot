import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import API from '../../adapters/API';



const Login = props => { 
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [errors, setErrors] = useState([])
    const history = useHistory();

const handleSubmit = (e) => { 
    e.preventDefault()
    API.login({email, password})
    .then(user => { 
        console.log(user)
        props.newUser(user)
        history.push('/events')
    })
    .catch(errors => { 
        console.error(errors);
        setErrors(errors)

    })
}

    return (
       <form onSubmit={handleSubmit}>
           {console.log(errors)}
           <input type='email' placeholder='email' name='email' value={email} onChange={e =>setEmail(e.target.value)}/>
           <input type='password' placeholder='password' name='password' value={password} onChange={e =>setPassword(e.target.value)}/>
            <input type ='submit'/>
       </form>
    )
}

export default Login
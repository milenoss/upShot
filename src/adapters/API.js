const API_ENDPOINT ='http://localhost:3000/api/v1/';
const LOGIN_URL = `${API_ENDPOINT}login`;
const SIGNUP_URL = `${API_ENDPOINT}users`;
const EVENTS_URL = `${API_ENDPOINT}events`;
// const EVENT_URL = `${API_ENDPOINT}events/${event.id}`;

const jsonify = res => { 
    return res.json()
    .then(data => {
       if( data.errors)
       throw data.errors
       else return data;
    })
}



const login = (userDetails) => fetch(LOGIN_URL,{ 
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({user: userDetails})
}).then(jsonify)
.then(data => { 
    localStorage.setItem('token', data.token);
    return data.user;
})
    

    // data => { 
    //     localStorage.setItem('token', data.token);
    //     return data.user
// })

export default { 
    login
}


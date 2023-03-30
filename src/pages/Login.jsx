import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        const loggedIn = {
            username: username,
            password: password
        }

        axios.post("http://localhost:4000/api/login", loggedIn)
            .then(response => console.log(response.data))
            .then(() => {
                setIsLoggedIn(true)
            })
    }
  return (
    <div className='container'>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input 
                    type="username" 
                    className='form-control form-group' 
                    placeholder='Username' 
                    onChange={e => setUsername(e.target.value)} 
                    value={username}
                /><br />
                <input 
                    type="password" 
                    className='form-control form-group' 
                    placeholder='Password' 
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                /> <br />
                <button type="submit">Login</button>
                <br />
                <Link className='signup-link' to="/signup">Don't have account yet?</Link>
            </form>
        </div>
    </div>
  )
}

export default Login
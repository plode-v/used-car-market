import React, { useState } from 'react'
import axios from 'axios';

const SignUp = () => {

	const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event){
        event.preventDefault();

        const registered = {
            fullName: fullName,
            username: username,
            email: email,
            password: password
        }

        axios.post("http://localhost:4000/api/signup", registered)
        .then(response => console.log(response.data))
        .then(() => {
            setFullName("")
            setUsername("")
            setEmail("")
            setPassword("")
        })
    }

	return (
        <div>
            <div className="container">
                <div className="form-div">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            className='form-control form-group' 
                            placeholder='Full Name' 
                            onChange={e => setFullName(e.target.value)} 
                            value={fullName} 
                        />
                        <br />
                        <input 
                            type="text" 
                            className='form-control form-group' 
                            placeholder='Username' 
                            onChange={e => setUsername(e.target.value)} 
                            value={username}
                        /><br />
                        <input 
                            type="email" 
                            className='form-control form-group' 
                            placeholder='Email' 
                            onChange={e => setEmail(e.target.value)} 
                            value={email}
                        /><br />
                        <input 
                            type="password" 
                            className='form-control form-group' 
                            placeholder='Password' 
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        /> <br />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
	)
}

export default SignUp
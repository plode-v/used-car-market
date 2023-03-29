import React, { useState } from "react";
import axios from "axios";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const login = {
            email: email,
            password: password
        }
        
        try {
            axios.post("http://localhost:4000/api/login", login)
                .then(response => console.log(response.data));
        } catch (err) {
            console.error(err)
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
        </form>
    )



}

export default Login;
import React, { useState } from 'react'
import "../styles.css"
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import axios from 'axios'

const Navbar = () => {

	const [username, setUsername] = useState(Login.username)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const handleLogin = async () => {
		const response = await fetch("http://localhost:4000/api/login", {
			method: "POST",
			body: JSON.stringify({ username }),
			headers: { "Content-Type": "application/json" },
		});
		const data = await response.json();
		if (data.success) {
			setUsername(data.username);
		}
	}

	return (
		<nav className="nav active">
			<Link to="/" className="site-title">Happier Used</Link>
			<ul>
				<li>
					<Link>Sell</Link>
				</li>
				<li>
					<Link>Buy</Link>
				</li>
				<li>
					<Link>Search</Link>
				</li>
				<li>
					{username ? (
						<Link to="/">{username}</Link>
					) : (<Link to="/login">Login</Link>)}
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
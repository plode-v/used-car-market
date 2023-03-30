import React, { useState } from 'react'
import SignUp from '../pages/Signup'
import Login from '../pages/Login'
import Navbar from './Navbar'
import { Route, Routes } from "react-router-dom"

const App = () => {

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState("")

	function handleLogIn(username){
		setIsLoggedIn(true)
		setUsername(username)
	}

	function handleLogOut() {
		setIsLoggedIn(false)
		setUsername("")
	}

	return (
		<>
			<Navbar username={username} isLoggedIn={isLoggedIn} onLogout={handleLogOut} />
			<div className="container">
				<Routes>
					<Route path="/login" element={<Login />} onLogIn={handleLogIn} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</div>
		</>
	)
}

export default App
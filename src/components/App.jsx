import React from 'react'
import SignUp from '../pages/Signup'
import Login from '../pages/Login'
import Navbar from './Navbar'
import { Route, Routes } from "react-router-dom"

const App = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</div>
		</>
	)
}

export default App
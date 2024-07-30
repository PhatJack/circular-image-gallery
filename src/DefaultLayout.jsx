import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Preload from './Preload'
import Header from './include/Header'
import Footer from './include/Footer'
import TransitionPage from './TransitionPage'

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Preload />
			{/* <TransitionPage /> */}
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default DefaultLayout
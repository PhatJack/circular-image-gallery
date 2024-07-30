import React, { useRef } from 'react'
import TransitionPage from './TransitionPage'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const About = () => {
	const aboutContainer = useRef(null)
	const about = gsap.timeline()
	useGSAP(() => {
		about.from("p.about-page", {
			y: 50,
			opacity: 0,
			duration: 1
		},">")
	}, {
		scope: aboutContainer.current
	})
	return (
		<>
			<TransitionPage timeline={about} />
			<div ref={aboutContainer}>
				<p className='about-page'>
					About
				</p>
			</div>
		</>
	)
}

export default About
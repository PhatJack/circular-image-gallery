import React, { useRef } from 'react'
import './About.css'
import TransitionPage from './TransitionPage'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Project = () => {
	const project = gsap.timeline()
	const projectContainer = useRef(null)
	useGSAP(() => {
		project.from("p.project-page", {
			y: 50,
			opacity: 0,
			duration: 1
		}, ">")
	}, {
		scope: projectContainer.current
	})

	return (
		<>
			<TransitionPage timeline={project} />
			<div ref={projectContainer}>
				<p className='project-page'>
					Project
				</p>
			</div>
		</>
	)
}

export default Project
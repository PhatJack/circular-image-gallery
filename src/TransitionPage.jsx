import React, { useLayoutEffect } from 'react'
import './Transition.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const TransitionPage = () => {

	useGSAP(() => {
		const tl = gsap.timeline()
		tl.set(".transition-in .row", { x: "-100%" })
		tl.to(".transition-in .row",
			{
				x: "0%",
				duration: 0.5,
				stagger: 0.1
			})
			.to(".transition-in .row", {
				x: "100%",
				duration: 0.5,
				stagger: 0.1
			})
			.to(".transition-in", {
				autoAlpha: 0,
				duration: 0.25
			})
	})

	return (
		<>
			<div className="transition-in">
				{
					Array.from({ length: 10 }).map((_, i) => (
						<div key={i} className="row"></div>
					))
				}
			</div>
		</>
	)
}

export default TransitionPage
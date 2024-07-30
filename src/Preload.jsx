import React, { useRef } from 'react'
import './Preload.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Preload = () => {

	const preloadContainer = useRef(null)
	useGSAP(() => {
		const tl = gsap.timeline()
		const items = document.querySelectorAll('.preload_col')
		const itemList = gsap.utils.toArray('.preload_col')
		tl.to(itemList, {
			scaleY: 0,
			transformOrigin: 'bottom',
			stagger: {
				amount: 0.75,
				from: "center",
			},
			delay: 1,
		}).to(preloadContainer.current, {
			autoAlpha: 0,
			duration: 0.25,
		})

	}, {
		scope: preloadContainer.current
	})

	return (
		<div ref={preloadContainer} className="preload_container">
			<div className="preload_group">
				{
					Array.from({ length: 21 }).map((_, i) => (
						<div key={i} className="preload_col"></div>
					))
				}
			</div>
		</div>
	)
}

export default Preload
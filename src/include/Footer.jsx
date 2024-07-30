import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

	const refFooter = useRef(null)
	useGSAP(() => {
		const tl = gsap.timeline()
		tl
			.from(".footer p", {
				y: 50,
				opacity: 0,
				duration: 1,
				ease: "circ",
			},">=3.5")
			.from(".footer__link", {
				y: 50,
				opacity: 0,
				stagger: 0.1,
				duration: 1,
				ease: "circ",
			}, ">")
	}, {
		scope: refFooter.current
	})

	return (
		<footer ref={refFooter} className="footer">
			<p>Hello world</p>
			<ul>
				<li className="footer__link">
					<Link to={"/circular-image-gallery/"}>
						Home
					</Link>
				</li>
				<li className="footer__link">
					<Link to="/circular-image-gallery/about">
						About
					</Link>
				</li>
				<li className="footer__link">
					<Link to="/circular-image-gallery/project">
						Project
					</Link>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
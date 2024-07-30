import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

	const refHeader = useRef(null)
	useGSAP(() => {
		const tl = gsap.timeline()
		tl
			.from(".header p", {
				y: 50,
				opacity: 0,
				duration: 1,
				ease: "circ",
			},">=1.5")
			.from(".header__link", {
				y: 50,
				opacity: 0,
				stagger: 0.1,
				duration: 1,
				ease: "circ",
			}, ">")
	}, {
		scope: refHeader.current
	})
	return (
		<nav ref={refHeader} className='header'>
			<p>Jack Phat</p>
			<ul>
				<li className="header__link">
					<Link to="https://github.com/PhatJack" target="_blank">
						github
					</Link>
				</li>
				<li className="header__link">
					<Link to="https://www.instagram.com/sep_neit.tahp/" target="_blank">
						instagram
					</Link>
				</li>
				<li className="header__link">
					<Link to="https://www.facebook.com/jack.willam2003" target="_blank">
						facebook
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Header
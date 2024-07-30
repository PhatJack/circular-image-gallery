import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
const Home = () => {
	const container = useRef(null);
	useGSAP(
		() => {
			const items = document.querySelectorAll(".item");
			const container = document.querySelector(".container");
			const numberOfItems = items.length;
			const angleIncrement = (2 * Math.PI) / numberOfItems;
			const radius = 300;

			const centerX = container.offsetWidth / 2;
			const centerY = container.offsetHeight / 2;
			const tl = gsap.timeline({ delay: 1.5 });

			items.forEach((item, index) => {
				const angle = index * angleIncrement;
				const initialRotation = angle * (180 / Math.PI) + 90;
				const x = centerX + radius * Math.cos(angle);
				const y = centerY + radius * Math.sin(angle);
				console.log(x, y);
				gsap.set(item, { scale: 0 });

				tl.to(
					item,
					{
						left: x + "px",
						top: y + "px",
						scale: 1,
						rotate: initialRotation,
						duration: 1,
						ease: "power2.out",
						delay: 1,
					},
					index * 0.1
				)
			});
			tl.fromTo(
				".name", {
				y: 50,
				scale: 0,
			}, {
				y: 0,
				scale: 1,
				duration: 1,
				ease: "circ",
			}, ">"
			).to(
				".gallery",
				{
					rotation: 360,
					transformOrigin: "center center",
					duration: 20,
					repeat: -1,
					ease: "none",
				},
				">=2"
			);
		},
		{
			scope: container.current,
		}
	);

	return (
		<>
			<div className="container" ref={container}>
				<div className="gallery">
					{Array.from({ length: 8 }).map((_, i) => (
						<div key={i} className="item">
							<img src={`img${i + 1}.jpg`} alt="img" />
						</div>
					))}
				</div>
				<p className="name">Meiiii cute</p>
			</div>

		</>
	);
}

export default Home
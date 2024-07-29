import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { gsap } from "gsap";
import "./App.css";
import { useGSAP } from "@gsap/react";

function App() {
  const container = useRef();
  useGSAP(
    () => {
      const items = document.querySelectorAll(".item");
      const itemList = gsap.utils.toArray(".item");
      const container = document.querySelector(".container");
      const numberOfItems = items.length;
      const angleIncrement = (2 * Math.PI) / numberOfItems;
      const radius = 300;
      let isGalleryOpen = false;

      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;
      const tl = gsap.timeline();

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
        ).to(
          ".gallery",
          {
            rotation: 360,
			transformOrigin: "center center",
            duration: 20,
            repeat: -1,
            ease: "none",
          },
          "<+=1.5"
        );
      });
    },
    {
      scope: container.current,
    }
  );

  return (
    <>
      <nav>
        <p>Jack Phat</p>
        <ul>
          <li className="link">
            <a href="https://github.com/PhatJack" target="_blank">
              github
            </a>
          </li>
          <li className="link">
            <a href="https://www.instagram.com/sep_neit.tahp/" target="_blank">
              instagram
            </a>
          </li>
          <li className="link">
            <a href="https://www.facebook.com/jack.willam2003" target="_blank">
              facebook
            </a>
          </li>
        </ul>
      </nav>
      <div className="container" ref={container}>
        <div className="gallery">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="item">
              <img src={`/img${i + 1}.jpg`} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import { useRef, useState } from "react";
import { gsap } from "gsap";
import "./App.css";
import { useGSAP } from "@gsap/react";
import Preload from "./Preload";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import DefaultLayout from "./DefaultLayout";

function App() {

	const router = createBrowserRouter([
		{
			path: "/circular-image-gallery",
			element: <DefaultLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "about",
					element: <About />,
				},
				{
					path: "project",
					element: <Project />,
				}
			]
		}
	])

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App;

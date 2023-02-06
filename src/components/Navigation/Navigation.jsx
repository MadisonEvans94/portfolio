import React from "react";
import "./Navigation.css";
const Navigation = () => {
	return (
		<div className="navigation-container grid-item-1">
			<div>
				<a href="#skill-page">
					<h1>Skills</h1>
				</a>
			</div>
			<div>
				<a href="#experience-page">
					<h1>Experience</h1>
				</a>
			</div>
			<div>
				<a href="#projects-page">
					<h1>Projects</h1>
				</a>
			</div>
			<div>
				<a href="#contact-page">
					<h1>Contact</h1>
				</a>
			</div>
		</div>
	);
};

export default Navigation;

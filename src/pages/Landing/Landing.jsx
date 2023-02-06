import React from "react";
import animatedLogo from "../../assets/animation.gif";
import "./Landing.css";
const Landing = () => {
	return (
		<div className="page-container">
			<div className="landing-container">
				<div className="name-container">
					<h1>Madison Evans</h1>
					<p>
						As a freelance full stack developer, I specialize in designing and
						developing responsive web applications that are both visually
						appealing and highly functional. With expertise in both front-end
						and back-end technologies, I'm committed to delivering custom
						solutions that meet the unique needs of my clients.
					</p>
				</div>

				<img src={animatedLogo} alt="animation" />
			</div>
		</div>
	);
};

export default Landing;

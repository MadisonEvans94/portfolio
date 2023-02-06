import React from "react";
import "./SkillCard.css";
import { useState } from "react";

const SkillCard = ({ cardTitle, skillList, description }) => {
	const [isHidden, setIsHidden] = useState(true);
	function toggleHidden() {
		setIsHidden((prevState) => !prevState);
	}
	return (
		<div className="skillcard-container" onClick={toggleHidden}>
			<h2>{cardTitle}</h2>
			<ul>
				{skillList.map((skill, index) => {
					return <li key={index}>{skill}</li>;
				})}
			</ul>
			<p className={`skillcard-description ${isHidden ? "hidden" : ""}`}>
				{description}
			</p>
		</div>
	);
};

export default SkillCard;

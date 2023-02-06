import React from "react";
import "./SkillCard.css";
import { useState } from "react";

const SkillCard = ({ cardTitle, skillList }) => {
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
			<p className={isHidden ? "hidden" : ""}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad et ut ab
				ratione nesciunt libero quas, expedita eius tempora? Facilis nulla ipsam
				numquam temporibus autem? Nisi, placeat ratione fugit libero rem
				ducimus, quam ut, esse minus natus mollitia ab! Reprehenderit maiores
				non magnam velit inventore quasi sed. Aliquid, laudantium!
			</p>
		</div>
	);
};

export default SkillCard;

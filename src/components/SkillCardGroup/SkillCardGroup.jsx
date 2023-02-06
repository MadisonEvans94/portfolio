import React from "react";
import SkillCard from "../SkillCard/SkillCard";
import "./SkillCardGroup.css";

const SkillCardGroup = ({ skillsArray }) => {
	return (
		<div className="skill-group-container grid-item-2">
			{skillsArray.map((skillCard, index) => {
				return (
					<SkillCard
						key={index}
						cardTitle={skillCard.cardTitle}
						skillList={skillCard.skillList}
						description={skillCard.description}
					/>
				);
			})}
		</div>
	);
};

export default SkillCardGroup;

import React from "react";
import SkillCard from "../SkillCard/SkillCard";
import "./SkillCardGroup.css";

{
	/* <div>
	<SkillCard
		cardTitle={"Frontend"}
		skillList={["Javascript", "React", "HTML/CSS/SCSS"]}
		description={"frontendDescription"}
	/>
	<SkillCard
		cardTitle={"Frontend"}
		skillList={["Javascript", "React", "HTML/CSS/SCSS"]}
		description={"frontendDescription"}
	/>
	<SkillCard
		cardTitle={"Frontend"}
		skillList={["Javascript", "React", "HTML/CSS/SCSS"]}
		description={"frontendDescription"}
	/>
</div>; */
}
const SkillCardGroup = ({ skillsArray }) => {
	return (
		<div className="skill-group-container">
			<SkillCard
				cardTitle={"Frontend"}
				skillList={["Javascript", "React", "HTML/CSS/SCSS"]}
				description={"frontendDescription"}
			/>
			<SkillCard
				cardTitle={"Frontend"}
				skillList={["Javascript", "React", "HTML/CSS/SCSS"]}
				description={"frontendDescription"}
			/>
			<SkillCard
				cardTitle={"Frontend"}
				skillList={["Javascript", "React", "HTML/CSS/SCSS"]}
				description={"frontendDescription"}
			/>
		</div>
	);
};

export default SkillCardGroup;

import "./App.css";
import SkillCard from "./components/SkillCard/SkillCard";
import SkillCardGroup from "./components/SkillCardGroup/SkillCardGroup";
const frontendDescription =
	"A good software engineer's frontend skills include expertise in HTML, CSS, and JavaScript, as well as experience with front-end frameworks such as React, Angular, or Vue. They should also have an eye for design and user experience, as well as knowledge of web performance and accessibility.";

const skillsArray = [
	{
		cardTitle: "Frontend",
		skillList: ["Javascript", "React", "HTML/CSS/SCSS"],
		description: "description goes here",
	},
	{
		cardTitle: "Frontend",
		skillList: ["Javascript", "React", "HTML/CSS/SCSS"],
		description: "description goes here",
	},
	{
		cardTitle: "Frontend",
		skillList: ["Javascript", "React", "HTML/CSS/SCSS"],
		description: "description goes here",
	},
];

function App() {
	return (
		<>
			<SkillCardGroup skillsArray={skillsArray} />
		</>
	);
}

export default App;

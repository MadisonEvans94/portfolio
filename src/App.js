import "./App.css";
import SkillCard from "./components/SkillCard/SkillCard";
import SkillCardGroup from "./components/SkillCardGroup/SkillCardGroup";
const frontendDescription =
	"A good software engineer's frontend skills include expertise in HTML, CSS, and JavaScript, as well as experience with front-end frameworks such as React, Angular, or Vue. They should also have an eye for design and user experience, as well as knowledge of web performance and accessibility.";

const skillsArray = [
	{
		cardTitle: "Frontend",
		skillList: ["Javascript", "React", "HTML/CSS/SCSS"],
		description: "this is where we will describe our frontend skills",
	},
	{
		cardTitle: "Backend",
		skillList: ["Python", "Java", "Django", "Flask"],
		description: "this is where we will describe our backend skills",
	},
	{
		cardTitle: "Other",
		skillList: ["SolidWorks", "Scitkit Learn", "Ableton"],
		description: "this is where we will describe any of our other skills",
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

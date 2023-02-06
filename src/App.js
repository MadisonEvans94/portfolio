import "./App.css";
import SkillCardGroup from "./components/SkillCardGroup/SkillCardGroup";
import Navigation from "./components/Navigation/Navigation";
import Timeline from "./components/Timeline/Timeline";
import Landing from "./pages/Landing/Landing";
import Projects from "./pages/Projects/Projects";
import SkillPage from "./pages/SkillPage/SkillPage";
import Experience from "./pages/Experience/Experience";
//TODO: use skillsArray for skillCardGroup Prop
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
			<div>
				<Navigation />
				<Landing />
				<SkillPage>
					<SkillCardGroup skillsArray={skillsArray} />
				</SkillPage>
				<Experience>
					<Timeline />
				</Experience>
				<Projects />
			</div>
		</>
	);
}

export default App;

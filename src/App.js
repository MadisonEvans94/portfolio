import "./App.css";
import SkillCard from "./components/SkillCard/SkillCard";

function App() {
	return (
		<div style={{ backgroundColor: "pink" }}>
			<SkillCard
				cardTitle={"Frontend"}
				skillList={["Javascript", "React", "HTML/CSS/SCSS"]}
			/>
		</div>
	);
}

export default App;

import "./App.css";
import SkillCard from "./components/SkillCard/SkillCard";
const frontendDescription =
	"A good software engineer's frontend skills include expertise in HTML, CSS, and JavaScript, as well as experience with front-end frameworks such as React, Angular, or Vue. They should also have an eye for design and user experience, as well as knowledge of web performance and accessibility.";

function App() {
	return (
		<div style={{ backgroundColor: "pink" }}>
			<SkillCard
				cardTitle={"Frontend"}
				skillList={["Javascript", "React", "HTML/CSS/SCSS"]}
				description={frontendDescription}
			/>
		</div>
	);
}

export default App;

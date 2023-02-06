import React from "react";
import "./ProjectItemGrid.css";
import VideoBackground from "../VideoBackground/VideoBackground";
const ProjectItemGrid = () => {
	return (
		<div className="parent">
			<div className="div1">
				<VideoBackground />
			</div>
			<div className="div2">
				<VideoBackground />
			</div>
			<div className="div3">
				<VideoBackground />
			</div>
			<div className="div4">
				<VideoBackground />
			</div>
		</div>
	);
};

export default ProjectItemGrid;

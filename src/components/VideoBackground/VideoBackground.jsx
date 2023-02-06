import React, { useRef } from "react";
import { useState } from "react";
import "./VideoBackground.css";
import vid from "./sample-vid.mp4";

const VideoBackground = () => {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handleMouseEnter = () => {
		setIsPlaying(true);
		videoRef.current.play();
	};

	const handleMouseLeave = () => {
		setIsPlaying(false);
		videoRef.current.pause();
		videoRef.current.currentTime = 0;
	};

	return (
		<div
			className={`video-background ${isPlaying ? "show-video" : ""}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<video
				className="video-background__video"
				src={vid}
				ref={videoRef}
				autoPlay={false}
				loop
				muted></video>
		</div>
	);
};

export default VideoBackground;

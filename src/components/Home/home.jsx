import React, { useEffect } from "react";

// Import images ==>
import video from "../../Assets/video.mp4";
import image from "../../Assets/Logo.png";

// Import AOS ==>
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
	// useEffect to set animation duration ==>
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className="home flex container">
			<div className="mainText">
				<h1 data-aos="fade-up" data-aos-duration="2500">
					Create Ever-lasting Memories With Us
				</h1>
			</div>

			<div className="homeImages flex">
				<div className="videoDiv">
					<video src={video} autoPlay muted loop className="video"></video>
				</div>

				<img src={image} alt="homeImg" className="image" />
			</div>
		</div>
	);
};

export default Home;

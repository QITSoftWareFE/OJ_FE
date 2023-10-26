import React from "react";

import gridImage from "../../Assets/Logo.png";
const Support = () => {
	return (
		<div className="support container section">
			<div className="sectionContainer">
				<div className="titlesDiv">
					<small>QIT Online Judge Support</small>
					<h2>Plan your train with confidence</h2>
					<p>
						Find help with learn and train plans, see how to improve your
						algorithms along QIT Online Judge's journey!
					</p>
				</div>

				<div className="infoDiv grid">
					<div className="textDiv grid">
						<div className="singleInfo">
							<p className="number">01</p>
							<h4>Travel requirements for Dubai</h4>
							<p>
								Find help with booking and travel plans, see what to expect
								along the journey to your favorite destinations!
							</p>
						</div>

						<div className="singleInfo">
							<p className="number colorOne">02</p>
							<h4>Travel requirements for Dubai</h4>
							<p>
								Find help with booking and travel plans, see what to expect
								along the journey to your favorite destinations!
							</p>
						</div>

						<div className="singleInfo">
							<p className="number colorTwo">03</p>
							<h4>Travel requirements for Dubai</h4>
							<p>
								Find help with booking and travel plans, see what to expect
								along the journey to your favorite destinations!
							</p>
						</div>
					</div>

					<div className="imgDiv">
						<img src={gridImage} alt="supportImage" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Support;

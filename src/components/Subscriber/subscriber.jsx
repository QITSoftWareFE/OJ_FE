import React from "react";

const Subscriber = () => {
	return (
		<div className="subscriber section">
			<div className="sectionContainer container">
				<h2>Subscribe Newsletters & get Latest News</h2>
				<div className="inputDiv flex">
					<input type="text" placeholder="Enter your email address" />
					<button className="btn">Subscribe</button>
				</div>
			</div>
		</div>
	);
};

export default Subscriber;

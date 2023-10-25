import React from "react";

// Import Icon ==>
import { RxCalendar } from "react-icons/rx";
import { GoShieldCheck, GoBookmark } from "react-icons/go";
const Info = () => {
	return (
		<div className="info section">
			<div className="infoContainer container">
				<div className="titleDiv flex">
					<h2>Travel to make memories in arithmetic all around the world</h2>
					<button className="btn">View all</button>
				</div>

				<div className="cardsDiv grid">
					<div className="singleCard grid">
						<div className="iconDiv flex">
							<RxCalendar className="icon" />
						</div>
						<p className="cardTitle">Book & Relax</p>
						<p>
							You can also call airlines from your phone and book your academic
							program!
						</p>
					</div>

					<div className="singleCard grid">
						<div className="iconDiv flex colorOne">
							<GoShieldCheck className="icon" />
						</div>
						<p className="cardTitle">Smart Checklist</p>
						<p>
							You can also call airlines from your phone and book your academic
							program!
						</p>
					</div>

					<div className="singleCard grid">
						<div className="iconDiv flex colorTwo">
							<GoBookmark className="icon" />
						</div>
						<p className="cardTitle">Save More</p>
						<p>
							You can also call airlines from your phone and book your academic
							program!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;

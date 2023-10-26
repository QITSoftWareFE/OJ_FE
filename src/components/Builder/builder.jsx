import React from "react";

// Import Images ==>
import destination from "../../Assets/background.jpg";
import builder1 from "../../Assets/builder1.jpg";
import builder2 from "../../Assets/Logo.png";
import builder3 from "../../Assets/Logo.png";
import builder4 from "../../Assets/Logo.png";

// To use array method called called Map to display all the data ==>
const builders = [
	{
		id: 1,
		destinationImage: destination,
		builderImage: builder1,
		builderRemit: "Technical Support",
		builderName: "@Polarish",
		builderURL: "https://github.com/AllianceTing",
	},
	{
		id: 2,
		destinationImage: destination,
		builderImage: builder2,
		builderRemit: "Full-stack Develope",
		builderName: "@KingYen.",
		builderURL: "https://github.com/Wenrh2004",
	},
	{
		id: 3,
		destinationImage: destination,
		builderImage: builder3,
		builderRemit: "Front-end Developer",
		builderName: "@xuexiswmz",
		builderURL: "https://github.com/xuexiswmz",
	},
	{
		id: 4,
		destinationImage: destination,
		builderImage: builder4,
		builderRemit: "Real-end Developer",
		builderName: "@zxd",
		builderURL: "https://github.com/RoyilEs",
	},
];
const Builder = () => {
	return (
		<div className="builders container section">
			<div className="sectionContainer">
				<h2>The Developer of this Online Judge!</h2>

				<div className="buildersContainer grid">
					{/* Developer's card */}
					{builders.map(
						({
							id,
							destinationImage,
							builderImage,
							builderRemit,
							builderName,
							builderURL,
						}) => {
							return (
								<div key={id} className="singleBuilder">
									<img
										src={destinationImage}
										alt="destinationImage"
										className="destinationImage"
									/>
									<div className="builderDetails">
										<img
											src={builderImage}
											alt="builderImage"
											className="builderImage"
										/>
									</div>
									<div className="builderName">
										<p>{builderRemit}</p>
										<a href={builderURL}>{builderName}</a>
									</div>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
	);
};

export default Builder;

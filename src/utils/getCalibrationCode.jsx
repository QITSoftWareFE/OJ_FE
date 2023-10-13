import React, { useEffect } from "react";

export const GetCalibrationCode = () => {
	const [time, setTime] = React.useState(60);
	const [timeId, setTimeId] = React.useState("");

	// state-corresponding
	useEffect(() => {
		if (time < 1) {
			clearInterval(timeId);
			setTime(60);
		}
	}, [timeId, time]);

	// Implementing a timer
	const countdown = () => {
		setTime((time) => time - 1);
		setTimeId(setInterval(() => setTime((time) => time - 1), 1000));
	};

	return (
		<div>
			<button onClick={countdown} disabled={time < 60 && time > 0}>
				{time === 60 || time === 0 ? "Get" : `${time} seconds to get.`}
			</button>
		</div>
	);
};

export default GetCalibrationCode;

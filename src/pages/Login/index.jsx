import React, { useState } from "react";
import FormInput from "../../components/formInput";
import GetCalibrationCode from "../../utils/getCalibrationCode";
import "./index.css";

const Login = () => {
	// To get the data from the login.
	const [values, setValues] = useState({
		phoneNumber: "",
		CalibrationCode: "",
	});

	// To the information about the input fields.
	const inputs = [
		{
			id: 1,
			name: "Phone Number",
			type: "text",
			placeholder: "Please enter your phone number",
			errorMessage: "Phone Number is not formatted correctly",
			label: "Phone Number",
			pattern: "^[0-9]{11}$",
			require: true,
		},
		{
			id: 2,
			name: "Calibration Code",
			type: "text",
			placeholder: "Please enter your Calibration Code on your phone",
			errorMessage: "Calibration Code is not formatted correctly",
			label: "Calibration Code",
			pattern: "^[0-9]{6}$",
			require: true,
		},
	];

	// Implementation of the submit function
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	// Implementing Dynamic Updates for Form Validation
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	// TODO： To create the POST requesting
	console.log(values);

	return (
		<div className="login">
			{/* form to user login */}
			<form onSubmit={handleSubmit}>
				{/* The title */}
				<h1>Welcome to</h1>
				<h1>QIT Online Judge🎉</h1>
				{/* The input */}
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}
				{/* To get calibration code */}
				<GetCalibrationCode></GetCalibrationCode>
				{/* To submit the information. */}
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Login;

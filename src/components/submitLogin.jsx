import React, { useState, useEffect } from "react";
import FormInput from "./formInput";
import "./submitLogin.css";
// import axios from "axios";
import {getArticleList} from "../utils/api"
// import { UserLogin,UserGetCode } from "../utils/api";
const SubmitLogin = () => {
	// To get the data from the login.
	const [values, setValues] = useState({
		phoneNumber: "",
		calibrationCode: "",
	});
	const [time, setTime] = React.useState(60);
	const [timeId, setTimeId] = React.useState("");

	// To the information about the input fields.
	const inputs = [
		{
			id: 1,
			name: "phoneNumber",
			type: "text",
			placeholder: "Please enter your phone number",
			errorMessage: "Phone Number is not formatted correctly",
			label: "Phone Number",
			pattern: "^[0-9]{11}$",
			require: true,
			maxLength:11,
		},
		{
			id: 2,
			name: "calibrationCode",
			type: "text",
			placeholder: "Please enter your Calibration Code on your phone",
			errorMessage: "Calibration Code is not formatted correctly",
			label: "Calibration Code",
			pattern: "^[0-9]{6}$",
			require: true,
			maxLength:6,
		},
	];

	// state-corresponding
	useEffect(() => {
		if (time < 1) {
			clearInterval(timeId);
			setTime(60);
		}
	}, [timeId, time]);

	// Implementation of the submit function
	const handleSubmit = (e) => {
		e.preventDefault();
		if (values.phoneNumber === "") {
			alert("Please enter phone number!");
		} else if (values.calibrationCode === "") {
			alert("Please enter calibration code!");
		} else {
			// TODO: jump to a new page
			// To creat a new POST request to get the login by the axios.
			// axios
			// 	.post("http://1.94.38.238:5500/api/user/login", {
			// 		phone_number: values.phoneNumber,
			// 		calibration_code: values.calibrationCode,
			// 	})
			// 	.then(function (response) {
			// 		console.log(response);
			// 		if (response.data.stutus_msg === "success") {
			// 			window.history.back(-1);
			// 		}
			// 	})
			// 	.catch(function (error) {
			// 		console.log(error);
			// 	});

			//调用封装好的axios函数
			getArticleList({
				phone_number: values.phoneNumber,
				calibration_code: values.calibrationCode,
			}).then(function (response){
				console.log(response);
				if(response.data.stutus_msg === "success"){
					window.history.back(-1);
				}
			}).catch(function(error){
				console.log(error);
			})

			
			// alert(`Phone Number:${values.phoneNumber}
			// Calibration Code:${values.calibrationCode}`);
		}
	};

	const handleClick = (e) => {
		e.preventDefault();
		if (values.phoneNumber === "") {
			alert("Please enter phone number!");
		} else {
			// To creat a new POST request to get the Calibration Code by the axios.
			// axios
			// 	.post("http://1.94.38.238:5500/api/user/getCode", {
			// 		phone_number: values.phoneNumber,
			// 	})
			// 	.then(function (response) {
			// 		console.log(response);
			// 	})
			// 	.catch(function (error) {
			// 		console.log(error);
			// 	});
			//调用封装好的axios函数
			getArticleList({
				phone_number: values.phoneNumber,
			})
			.then(function (response){
				console.log(response);
			})
			.catch(function(error){
				console.log(error);
			});
			alert(`Phone Number: ${values.phoneNumber}
			Get Calibration Code`);
			setTime((time) => time - 1);
			setTimeId(setInterval(() => setTime((time) => time - 1), 1000));
		}
	};

	// Implementing Dynamic Updates for Form Validation
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	// TODO： To create the POST requesting
	console.log(values);

	return (
		<div>
			{/* form to user login */}
			<form onSubmit={handleSubmit}>
				{/* The title */}
				<br/>
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
				{/* TODO: 如果手机号表单验证不通过，禁止触发 */}
				<button onClick={handleClick} disabled={time < 60 && time > 0}>
					{time === 60 || time === 0 ? "Get" : `${time} second to try again`}
				</button>
				{/* To submit the information. */}
				<button>Submit</button>
			</form>
		</div>
	);
};

export default SubmitLogin;

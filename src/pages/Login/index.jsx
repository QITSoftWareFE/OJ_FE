import React from "react";
import SubmitLogin from "../../components/SubmitLogin/submitLogin";
import "./index.css";

const Login = () => {
	return (
		<div className="login">
			{/* form to user login */}
			<SubmitLogin></SubmitLogin>
		</div>
	);
};

export default Login;

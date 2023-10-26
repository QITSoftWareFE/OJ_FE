import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="*" element={<div>404 Not Found</div>}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;

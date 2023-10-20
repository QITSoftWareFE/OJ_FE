import React, { useState } from "react";

import { AiOutlineCode } from "react-icons/ai";
import { BsGlobe, BsPhoneVibrate } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";

import logo from "../../Assets/Logo.png";

const Navbar = () => {
	// To remove the NavBar in the small width screens ==>
	const [active, setActive] = useState("navBarMenu");
	const showNavBar = () => {
		if (active === "navBarMenu") {
			setActive("navBarMenu showNavBar");
		} else {
			setActive("navBarMenu");
		}
	};
	const removeNavBar = () => {
		setActive("navBarMenu");
	};
	return (
		<div className="navBar flex">
			<div className="navBarOne flex">
				<div>
					<AiOutlineCode className="icon" />
				</div>

				<div className="none flex">
					<li className="flex">
						<BsPhoneVibrate className="icon" />
						Support
					</li>
					<li className="flex">
						<BsGlobe className="icon" />
						Languages
					</li>
				</div>

				<div className="atb flex">
					<p>Sign In</p>
					<p>Sign Out</p>
				</div>
			</div>

			<div className="navBarTwo">
				<div className="logoDiv">
					<img src={logo} alt="logo" className="logo" />
				</div>

				<div className={active}>
					<ul className="menu flex">
						<li onClick={removeNavBar} className="listItem">
							Home
						</li>
						<li onClick={removeNavBar} className="listItem">
							About
						</li>
						<li onClick={removeNavBar} className="listItem">
							Offers
						</li>
						<li onClick={removeNavBar} className="listItem">
							Seats
						</li>
						<li onClick={removeNavBar} className="listItem">
							Destinations
						</li>
					</ul>

					<button onClick={removeNavBar} className="btn flex btnOne">
						Contact
					</button>
				</div>

				<button className="btn flex btnTwo">Contact</button>
				<div onClick={showNavBar} className="toggleIcon">
					<CgMenuGridO className="icon" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;

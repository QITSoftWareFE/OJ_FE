import React from "react";

import { AiOutlineCode } from "react-icons/ai";
import { BsGlobe, BsPhoneVibrate } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";

import logo from "../../Assets/Logo.png";

const Navbar = () => {
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
					<span>Sign In</span>
					<span>Sign Out</span>
				</div>
			</div>
			<div className="navBarTwo">
				<div className="logo">
					<img src={logo} alt="logo" className="logo" />
				</div>
			</div>

			<div className="navBarMenu">
				<ul className="menu flex">
					<li className="lisItem">Home</li>
					<li className="lisItem">About</li>
					<li className="lisItem">Offers</li>
					<li className="lisItem">Seats</li>
					<li className="lisItem">Destinations</li>
				</ul>

				<button className="btn flex btnOne">Contact</button>

				<div className="toggleIcon">
					<CgMenuGridO className="icon" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;

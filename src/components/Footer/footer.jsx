import React from "react";

// Import Icons ==>
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephoneInboundFill, BsTencentQq, BsWechat } from "react-icons/bs";

// Import Images ==>
import logo from "../../Assets/Logo.png";
const Footer = () => {
	return (
		<div className="footer">
			<div className="sectionContainer container grid">
				<div className="gridOne">
					<div className="logoDiv">
						<img src={logo} alt="" className="logo" />
					</div>
					<p>Your mind should be stronger than your feelings, let's go!</p>
					<div className="socialIcon flex">
						<BsTelephoneInboundFill className="icon" />
						<MdOutlineEmail className="icon" />
						<BsTencentQq className="icon" />
						<BsWechat className="icon" />
					</div>
				</div>

				<div className="footerLinks">
					<span className="linkTitle">Information</span>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">Home</a>
					</li>
				</div>

				<div className="footerLinks">
					<span className="linkTitle">Quick Guide</span>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Home</a>
					</li>
				</div>

				<div className="footerLinks">
					<span className="linkTitle">Quick Guide</span>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Home</a>
					</li>
				</div>
			</div>

			<div className="copyRightDiv flex">
				<p>
					Courtesy Design | Developer by{" "}
					<a href="" target="_blank">
						QIT Software Studio
					</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;

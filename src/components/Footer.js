import React from "react";
import { useLocation } from "react-router-dom";

const footer = {
	backgroundColor: "rgb(0, 0, 0)",
	position: "absolute",
	marginTop: "1rem",
	width: "100%",
	textAlign: "center",
};
const para = {
	padding: "2rem",
	color: "white",
};

const Footer = () => {
	const location = useLocation();
	const path = location.pathname;
	console.log("path", path);

	return (
				<div style={footer}>
					<p style={para}>Made with ❤ by Nirmal, Adarsh & Neeraj</p>
				</div>
	);
};

export default Footer;

/** @format */

import { IconButton } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
	return (
		<Element className="contact" id="contact">
			<h1>Contact</h1>
			<div className="contact_container">
				<p>
					Email : <span>ganscivil.2208@gmail.com</span>
				</p>
				<p>
					GitHub : <span>@Gans19</span>
				</p>
				<div className="contact_icon">
					<a href="https://www.linkedin.com/in/selva-ganesh-g/">
						<IconButton>
							<FaLinkedin />
						</IconButton>
					</a>
					<a href="https://www.facebook.com/gselva.ganesh">
						<IconButton>
							<FaFacebook />
						</IconButton>
					</a>
					<a href="https://www.instagram.com/gselva.ganesh/">
						<IconButton>
							<FaInstagram />
						</IconButton>
					</a>
				</div>
			</div>
		</Element>
	);
};

export default Contact;

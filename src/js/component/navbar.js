import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<div className="navbar-brand">Venture Hound</div>
			</Link>

			<div className="Login">
				<Link to="/login">
					<button type="button" className="btn btn-primary" data-toggle="modal" data-target="loginModal">
						Login
					</button>
				</Link>
				<Link to="/register">
					<button type="button" className="btn btn-secondary">
						Sign Up
					</button>
				</Link>
			</div>
		</nav>
	);
};

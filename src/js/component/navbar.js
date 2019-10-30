import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="navbar-brand">Venture Hound</div>
			<div>
				<Link to="/favorites">
					<button type="button" className="btn btn-primary">
						Favorites
					</button>
				</Link>
				<Link to="/details">
					<button type="button" className="btn btn-primary">
						Details
					</button>
				</Link>
				<Link to="/profile">
					<button type="button" className="btn btn-primary">
						Profile
					</button>
				</Link>
				<Link to="/editprofile">
					<button type="button" className="btn btn-primary">
						Edit Profile
					</button>
				</Link>
			</div>
			<div className="Login">
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="loginModal">
					Login
				</button>

				<button type="button" className="btn btn-secondary">
					Sign Up
				</button>
			</div>
		</nav>
	);
};

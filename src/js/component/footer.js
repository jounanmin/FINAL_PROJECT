import React, { Component } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="card text-center fixed-bottom bg-light">
		<div className="card-header">
			<ul className="nav nav-pills card-header-pills d-flex justify-content-around bottomnav">
				<li className="nav-item">
					<span className="nav-link fas fa-search" href="#" />
				</li>
				<Link to="/favorites">
					<li className="nav-item">
						<span className="nav-link fas fa-paw" href="#" />
					</li>
				</Link>
				<li className="nav-item">
					<span
						className="nav-link fas fa-map-pin "
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						href="#"
					/>
				</li>
			</ul>
		</div>
	</div>
);

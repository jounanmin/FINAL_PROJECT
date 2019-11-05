import React, { Component } from "react";
import "../../styles/home.scss";

export const Footer = () => (
	<div className="card text-center fixed-bottom bg-light">
		<div className="card-header">
			<ul className="nav nav-pills card-header-pills d-flex justify-content-around bottomnav">
				<li className="nav-item">
					<a className="nav-link fas fa-search" href="#" />
				</li>
				<li className="nav-item">
					<a className="nav-link fas fa-paw" href="#" />
				</li>
				<li className="nav-item">
					<a className="nav-link fas fa-map-pin" href="#" />
				</li>
			</ul>
		</div>
	</div>
);

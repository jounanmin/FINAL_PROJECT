import React, { Component } from "react";
import "../../styles/home.scss";

export const Footer = () => (
	<div>
		<div className="card text-center">
			<div className="card-header">
				<ul className="nav nav-pills card-header-pills">
					<li className="nav-item">
						<a className="nav-link" href="#">
							Search
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Favs
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Filter
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

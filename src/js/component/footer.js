import React, { Component } from "react";
import "../../styles/home.scss";

export const Footer = () => (
	<div>
		<div className="card text-center fixed-bottom bg-light ">
			<div className="card-header d-flex justify-content-center">
				<div className=" row nav nav-pills footer card-header-pills d-flex justify-content-center">
					<div className="nav-item col-sm-4">
						<a className="nav-link fas fa-search" href="#" />
					</div>
					<div className="nav-item col-sm-4">
						<a className="nav-link fas fa-paw" href="#" />
					</div>
					<div className="nav-item col-sm-4">
						<a className="nav-link fas fa-map-pin" href="#" />
					</div>
				</div>
			</div>
		</div>
	</div>
);

import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export default class EditProfile extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="card editProfilecard col-md-6 col-sm-12">
						<div className="card-body">
							<h5 className="card-title">Edit Profile Information</h5>
							<p>First Name</p>
							<input />
							<p> </p>
							<p>Last Name</p>
							<input />
							<p> </p>
							<p>Screen Name</p>
							<input />
							<br />
							<br />
							<a href="#" className="btn btn-primary">
								Update Information
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export default class Profile extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="container">
				<div className="jumbotron row profile">
					<div className="col-md-3 col-sm-12 profileimagediv">
						<img
							className="profileimage"
							src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-600w-1365533969.jpg"
						/>
					</div>
					<div className="col-md-3 col-sm-12 profileuserdiv">
						<h2>User Name</h2>
						<Link to="/editprofile">
							<button type="button" className="btn btn-secondary">
								Edit
							</button>
						</Link>
					</div>
					<div className="col-md-6 col-sm-12">
						<h3>User Information</h3>
						<Link to="/ratings">
							<h4>Ratings</h4>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

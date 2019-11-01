import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

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

						<button type="button" className="btn btn-secondary">
							Edit
						</button>
					</div>
					<div className="col-md-6 col-sm-12">
						<h3>User Information and Ratings</h3>
					</div>
				</div>
			</div>
		);
	}
}

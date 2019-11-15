import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default class EditProfile extends React.Component {
	constructor() {
		super();
		this.state = { firstname: "", lastname: "", username: "", email: "" };
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="card editProfilecard col-md-6 col-sm-12">
						<div className="card-body">
							<h5 className="card-title">Edit Profile Information</h5>
							<p>First Name</p>
							<input
								type="username"
								className="form-control"
								placeholder="First Name"
								onChange={e => this.setState({ firstname: e.target.value })}
							/>
							<p> </p>
							<p>Last Name</p>
							<input
								type="username"
								className="form-control"
								placeholder="Last Name"
								onChange={e => this.setState({ lastname: e.target.value })}
							/>
							<p> </p>
							<p>Username</p>
							<input
								type="username"
								className="form-control"
								placeholder="Username"
								onChange={e => this.setState({ username: e.target.value })}
							/>
							<br />
							<p>Email Address</p>

							<input
								type="username"
								className="form-control"
								placeholder="Email Address"
								onChange={e => this.setState({ email: e.target.value })}
							/>
							<br />
							<br />
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<Link to="/profile">
											<button
												href="#"
												className="btn btn-primary"
												onClick={() =>
													actions.editprofile(
														this.state.firstname,
														this.state.lastname,
														this.state.username,
														this.state.email
													)
												}>
												Update Information
											</button>
										</Link>
									);
								}}
							</Context.Consumer>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

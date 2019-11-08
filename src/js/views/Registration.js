import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext";
import { Link } from "react-router-dom";

export default class Registration extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="card editProfilecard col-md-6 col-sm-12">
						<div className="card-body login">
							<h5 className="card-title">Sign up</h5>
							<p>Email</p>
							<input />
							<p> </p>
							<p>Password</p>
							<input />
							<p> </p>
							<p>Username</p>
							<input />
							<p> </p>
							<Link to="/profile" className>
								<a href="#" className="btn btn-primary">
									Save
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

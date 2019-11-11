import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	render() {
		return (
			//<Consumer>
			//	{({ store, actions }) => {
			//		return (
			<div className="container">
				<div className="row">
					<div className="card editProfilecard col-md-6 col-sm-12">
						<div className="card-body login">
							<h5 className="card-title">Login</h5>
							<p>Username</p>
							<input onChange={e => this.setState({ username: e.target.value })} />
							<p> </p>
							<p>Password</p>
							<input onChange={e => this.setState({ password: e.target.value })} />
							<p> </p>
							<Link to="/">
								<a
									href="#"
									className="btn btn-primary"
									onClick={() => actions.loginUser(this.state.password, this.state.username)}>
									Login
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			//		);
			//	}}
			//</Consumer>
		);
	}
}

import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			pword: ""
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="row">
								<div className="card editProfilecard col-md-6 col-sm-12">
									<div className="card-body login">
										<h5 className="card-title">Login</h5>
										<p>Username</p>
										<input
											onChange={e => this.setState({ username: e.target.value })}
											type="username"
											className="form-control"
											placeholder="Username"
										/>
										<p> </p>
										<p>Password</p>
										<input
											onChange={
												(e => this.setState({ pword: e.target.value }),
												console.log(this.state.pword))
											}
											type="Password"
											className="form-control"
											placeholder="Password"
										/>
										<p> </p>
										<Link to="/">
											<button
												href="#"
												className="btn btn-primary"
												onClick={() =>
													actions.loginUser(this.state.pword, this.state.username)
												}>
												Login
											</button>
										</Link>
										,{" "}
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

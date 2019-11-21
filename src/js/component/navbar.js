import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";
import { Context } from "../store/appContext";

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			showmodal: false,
			details: []
		};
	}
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<Link to="/">
					<div className="navbar-brand">Venture Hound</div>
				</Link>
				<Context.Consumer>
					{({ store, actions }) => {
						console.log(store.loggedInUser);
						if (store.loggedInUser.length === 0) {
							return (
								<div className="Login">
									<Link to="/login">
										<button
											type="button"
											className="btn btn-primary"
											data-toggle="modal"
											data-target="loginModal">
											Login
										</button>
									</Link>
									<Link to="/register">
										<button type="button" className="btn btn-secondary">
											Sign Up
										</button>
									</Link>
								</div>
							);
						} else
							return (
								<div className="out">
									Welcome, <Link to="/profile">{store.loggedInUser.firstname}</Link>
									<h8
										onClick={() => actions.logout()}
										type="button"
										className="btn btn-primary"
										data-toggle="modal"
										data-target="loginModal">
										Log Out
									</h8>
								</div>
							);
					}}
				</Context.Consumer>
			</nav>
		);
	}
}

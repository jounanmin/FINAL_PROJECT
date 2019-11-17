import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default class Profile extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="jumbotron row profile">
								<div className="col-md-3 col-sm-12 profileimagediv">
									<img
										className="profileimage"
										src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-600w-1365533969.jpg"
									/>
								</div>
								<div className="col-md-3 col-sm-12 profileuserdiv">
									<h2>{store.loggedInUser.userid}</h2>
									<Link to="/editprofile">
										<button type="button" className="btn btn-secondary">
											Edit
										</button>
									</Link>
								</div>
								<div className="col-md-6 col-sm-12">
									<h3>{store.loggedInUser.email}</h3>
									<Link to="/ratings">
										<h4>Ratings</h4>
									</Link>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

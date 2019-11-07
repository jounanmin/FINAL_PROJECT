import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export default class Ratings extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-12 favoritecard row">
						<div className="col-md-4 favoritecardimg">
							<img
								src="https://p1cdn4static.civiclive.com/UserFiles/Servers/Server_9496362/Image/Parks%20and%20Recreation/Public%20Parks/Hatfield%20Dog%20Park/Dog%20Park%20Small.jpg"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="card-body col-md-8">
							<h5 className="card-title">Location Name</h5>
							<span className="fa fa-star checked" />
							<span className="fa fa-star checked" />
							<span className="fa fa-star checked" />
							<span className="fa fa-star" />
							<span className="fa fa-star" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 col-sm-12 favoritecard row">
						<div className="col-md-4 col-sm-12 favoritecardimg">
							<img
								src="https://p1cdn4static.civiclive.com/UserFiles/Servers/Server_9496362/Image/Parks%20and%20Recreation/Public%20Parks/Hatfield%20Dog%20Park/Dog%20Park%20Small.jpg"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="card-body col-md-8 col-sm-12">
							<h5 className="card-title">Location Name</h5>
							<span className="fa fa-star checked" />
							<span className="fa fa-star checked" />
							<span className="fa fa-star checked" />
							<span className="fa fa-star checked" />
							<span className="fa fa-star checked" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

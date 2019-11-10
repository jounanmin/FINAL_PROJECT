import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/Card.js";
import { MapTest } from "../component/mapTest.js";

export default class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="map col-md-12">
						<MapTest />
					</div>
				</div>
				<div className="cardDetails" />
			</div>
		);
	}
}

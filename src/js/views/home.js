import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/Card.js";

export const Home = () => (
	<div className="container">
		<div className="map">
			<h1>map</h1>
		</div>

		<div className="cardDetails">
			<Card />
		</div>
	</div>
);

import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/Card.js";
import { MapTest } from "../component/mapTest.js";
import { GoogleMap, LoadScript, MarkerClusterer, Marker } from "@react-google-maps/api";
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
		let alpha = "hide";
		if (this.state.showmodal === true) alpha = "show";
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="map col-md-12">
						<LoadScript
							id="script-loader"
							googleMapsApiKey="AIzaSyAPbZ3EPs3SxgQcrxmpO31bc8drIY7Ikeo"
							// {...other this.props}
						>
							<GoogleMap
								id="circle-example"
								mapContainerStyle={{
									height: "675px",
									width: "100%"
								}}
								zoom={13}
								center={{
									lat: 25.803516,
									lng: -80.1336388
								}}>
								<Context.Consumer>
									{({ store, actions }) => {
										return (
											<MarkerClusterer
												options={{
													imagePath:
														"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
												}}>
												{clusterer =>
													store.locations.map((name, index) => {
														return name.location.map((location, i) => (
															<Marker
																onClick={Cluster => {
																	this.setState({ showmodal: true });
																	this.setState({ details: name });
																}}
																key={i}
																position={location}
																clusterer={clusterer}
															/>
														));
													})
												}
											</MarkerClusterer>
										);
									}}
								</Context.Consumer>
								...Your map components
							</GoogleMap>
						</LoadScript>
					</div>
					<div className="basicdetails col-md-12 col-sm-12" id={alpha}>
						<Card
							location={this.state.details.title}
							address={this.state.details.address}
							id={this.state.details.id}
						/>
					</div>
				</div>
			</div>
		);
	}
}

import React from "react";
import "../../styles/home.scss";
import { Card } from "../component/Card.js";
import { MapTest } from "../component/mapTest.js";
import { GoogleMap, LoadScript, MarkerClusterer, Marker } from "@react-google-maps/api";
import { Context } from "../store/appContext";

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			showmodal: false,
			details: [],
			fenced: true
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
									height: "600px",
									width: "100%"
								}}
								zoom={12}
								center={{
									lat: 25.8450684,
									lng: -80.1290947
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
														let temp = name.location.filter(ele => {
															if (this.state.fenced === true) {
																return name.fenced;
															}
														});
														console.log(temp, "temp");
														return temp.map((location, i) => (
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
						<i
							className="fas fa-times x"
							id={alpha}
							onClick={() => {
								this.setState({ showmodal: false });
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

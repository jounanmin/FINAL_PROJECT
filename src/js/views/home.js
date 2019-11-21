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
			fenced: false,
			showfilter: false
		};
	}
	render() {
		let alpha = "hide";

		if (this.state.showmodal === true) alpha = "show";
		return (
			<div className="container-fluid hundred">
				<div className="row hundred">
					<div className="map col-md-12 hundred">
						<LoadScript
							id="script-loader"
							googleMapsApiKey="AIzaSyAPbZ3EPs3SxgQcrxmpO31bc8drIY7Ikeo"
							// {...other this.props}
						>
							<GoogleMap
								id="circle-example"
								mapContainerStyle={{
									height: "91%",
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
															} else return name;
														});

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
								console.log(bravo);
								this.setState({ showmodal: false });
								console.log(bravo);
							}}
						/>
					</div>
					<Context.Consumer>
						{({ store, actions }) => {
							let bravo = "hidefilter";
							if (store.filterbutton === true) {
								bravo = "showfilter";
							} else {
								bravo = "hidefilter";
							}
							return (
								<div className="filterbox" id={bravo}>
									<button
										onClick={() => {
											if (this.state.fenced === false) {
												this.setState({ fenced: true });
												console.log(this.state.fenced);
											} else {
												this.setState({ fenced: false });
											}
										}}
									/>
								</div>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

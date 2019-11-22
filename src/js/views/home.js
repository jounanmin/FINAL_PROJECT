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
		let foxtrot = {
			lat: 25.803516,
			lng: -80.1336388
		};
		let clicked = "checked";
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
														let delta = [
															{
																lat: parseFloat(name.lat),
																lng: parseFloat(name.log)
															}
														];
														// let temp = name.delta.filter(ele => {
														// 	if (this.state.fenced === true) {
														// 		return name.fenced;
														// 	} else return name;
														// });
														// console.log(temp);
														console.log(delta);
														return delta.map((location, i) => (
															<Marker
																onClick={Cluster => {
																	this.setState({ showmodal: true });
																	this.setState({ details: name });

																	foxtrot = location;
																	console.log(location);
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
					<Context.Consumer>
						{({ store, actions }) => {
							let bravo = "hidefilter";
							if (store.filterbutton === true) {
								bravo = "showfilter";
							} else {
								bravo = "hidefilter";
							}
							return (
								<div className="filterbox col-md-4 col-sm-2 col-xs-2" id={bravo}>
									<label className="container">
										Fenced
										<input
											type="checkbox"
											onClick={() => {
												if (this.state.fenced === false) {
													this.setState({ fenced: true });
												} else {
													this.setState({ fenced: false });
												}
												if ((clicked = "checked")) {
													clicked = "unchecked";
												} else clicked = "checked";
											}}
										/>
										<span className="checkmark" />
									</label>
								</div>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

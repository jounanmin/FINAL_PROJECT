import React from "react";
import { GoogleMap, LoadScript, MarkerClusterer, Marker } from "@react-google-maps/api";
import { Consumer } from "../store/appContext";
import { Context } from "../store/appContext";

export class MapTest extends React.Component {
	render() {
		return (
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
														console.log("smart", name);
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
		);
	}
}

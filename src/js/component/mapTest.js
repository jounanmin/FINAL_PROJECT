import React from "react";
import { GoogleMap, LoadScript, MarkerClusterer, Marker } from "@react-google-maps/api";

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
					zoom={14}
					center={{
						lat: 25.7740503,
						lng: -80.1971402
					}}>
					<MarkerClusterer
						options={{
							imagePath:
								"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
						}}>
						{clusterer =>
							[{ lat: 25.783416, lng: -80.1336388 }, { lat: 25.8888332, lng: -80.124721 }].map(
								(location, i) => (
									<Marker
										onClick={Cluster => {
											console.log("smart");
										}}
										key={i}
										position={location}
										clusterer={clusterer}
									/>
								)
							)
						}
					</MarkerClusterer>
					...Your map components
				</GoogleMap>
			</LoadScript>
		);
	}
}

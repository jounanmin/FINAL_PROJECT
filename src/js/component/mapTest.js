import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

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
						height: "400px",
						width: "800px"
					}}
					zoom={7}
					center={{
						lat: 25.7740503,
						lng: -80.1971402
					}}>
					...Your map components
				</GoogleMap>
			</LoadScript>
		);
	}
}

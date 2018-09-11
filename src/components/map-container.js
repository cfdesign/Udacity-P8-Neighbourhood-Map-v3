import React, { Component } from 'react';
import Map from "./map";

class MapContainer extends Component {

	render() {
		return (
			<Map
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDFmBaup4gwatQ8wxKdZzPFsZUz7rhIq-8&v=3`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100vh`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                locations={this.props.locations}
			/>
		);
	}
}
export default MapContainer

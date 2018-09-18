import React, { Component } from 'react';
import Map from "./map";

class MapContainer extends Component {
	state = {
		markerLocation: []
	}

	componentDidUpdate(prevProps) {
        if (this.props.searchResult !== prevProps.searchResult) {
            // This function can also conversely add markers, it serves to both add and remove.
            this.onToggleOpen(null)
		}
	}

    onToggleOpen  = (location) => {
		this.setState({markerLocation: [location]})
		//if (this.state.markerLocation[0]) {
			//this.state.markerLocation[0].name ? this.setState({isOpen: true}) : this.setState({isOpen: false})
		//}
		//console.log({lat: this.state.markerLocation.location.lat, lng: this.state.markerLocation.location.lng})

        //console.log(this.state.markerLocation[0] ? "yes" : "no")
	}

	render() {
		return (
			<Map
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDFmBaup4gwatQ8wxKdZzPFsZUz7rhIq-8&v=3`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100vh`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
				searchResult={this.props.searchResult}
				onToggleOpen={this.onToggleOpen}
				markerLocation={this.state.markerLocation[0]}
				listClick={this.props.listClick}
			/>
		);
	}
}
export default MapContainer

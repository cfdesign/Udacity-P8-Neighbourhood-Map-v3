import React, { Component } from 'react';
import { Marker } from "react-google-maps";

class MapMarker extends Component {

	componentDidUpdate(prevProps) {
        if (this.props.listClicked !== prevProps.listClicked) {
            // This function can also conversely add markers, it serves to both add and remove.
            this.open()
		}
	}

    open() {
        if (this.props.location.id === this.props.listClicked) {
            this.props.onToggleOpen(this.props.location)
        }
        //this.props.location.id === this.props.listClick ?
        //this.props.onToggleOpen(this.props.location) : this.setState({animation: 2})
    }

    render(){
        //console.log(this.props.location)
        return(
            <Marker
                title={this.props.location.name}
                position={{lat: this.props.location.location.lat, lng: this.props.location.location.lng}}
                //animation={window.google.maps.Animation.DROP}
                animation= {2}
                onClick={() => this.props.onToggleOpen(this.props.location)}
            />
        );
    }
}
export default MapMarker

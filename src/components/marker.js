import React, { Component } from 'react';
import { Marker } from "react-google-maps";

class MapMarker extends Component {
    state = {
        animation: 2
    }

	componentDidUpdate(prevProps) {
        if (this.props.listId !== prevProps.listId) {
            // This function can also conversely add markers, it serves to both add and remove.
            this.open()
		}
	}

    open() {
        if (this.props.location.id === this.props.listId) {
            this.props.markerClicked(this.props.location)
            this.animate()
        }
        //this.props.location.id === this.props.listId ?
        //this.props.markerClicked(this.props.location) : this.setState({animation: 2})
    }

    animate() {
        this.setState({animation: 1})
        setTimeout(() => {
            this.setState({animation: 0})
        }, 1000)
    }

    render(){
        //console.log(this.props.location)
        return(
            <Marker
                title={this.props.location.name}
                position={{lat: this.props.location.location.lat, lng: this.props.location.location.lng}}
                //animation={window.google.maps.Animation.DROP}
                //icon={{anchor: new window.google.maps.Point(17, 34)}}
                animation= {this.state.animation}
                onClick={() => {this.props.markerClicked(this.props.location); this.animate()}}
            />
        );
    }
}
export default MapMarker

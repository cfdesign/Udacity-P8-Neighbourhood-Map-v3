import React, { Component } from 'react';
import { Marker } from "react-google-maps";

class MapMarker extends Component {
    render(){
        //console.log(this.props.location)
        return(
            <Marker
                title={this.props.location.name}
                position={{lat: this.props.location.location.lat, lng: this.props.location.location.lng}}
                animation={window.google.maps.Animation.DROP}
                onClick={() => this.props.onToggleOpen(this.props.location)}
            />
        );
    }
}
export default MapMarker

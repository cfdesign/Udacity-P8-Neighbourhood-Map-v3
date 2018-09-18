import React, { Component } from 'react';
import { InfoWindow } from "react-google-maps";

class MapInfoWindow extends Component {
    render(){
        return(
            <InfoWindow
                position={{lat: this.props.markerLocation.location.lat, lng: this.props.markerLocation.location.lng}}
                onCloseClick={() => this.props.onToggleOpen(null)}
            >
                <div>
                    <div>{this.props.markerLocation.name}</div>
                    <div>{this.props.markerLocation.categories[0].name}</div>
                </div>
            </InfoWindow>
        );
    }
}
export default MapInfoWindow

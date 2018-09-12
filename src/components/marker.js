import React, { Component } from 'react';
import { Marker, InfoWindow } from "react-google-maps";

class MapMarker extends Component {
    state = {
        isOpen: false
    }
    onToggleOpen  = () => {
		this.setState({isOpen: !this.state.isOpen})
	}

    render(){
        return(
            <Marker
                title={this.props.location.name}
                position={this.props.position}
                animation={window.google.maps.Animation.DROP}
                onClick={this.onToggleOpen}
            >
            {this.state.isOpen &&
                <InfoWindow onCloseClick={this.onToggleOpen}>
                    <div>
                        <div>{this.props.location.name}</div>
                        <div>{this.props.location.categories[0].name}</div>
                    </div>
                </InfoWindow>
            }
            </Marker>
        );
    }
}
export default MapMarker
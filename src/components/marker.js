import React, { Component } from 'react';
import { Marker } from "react-google-maps";

class MapMarker extends Component {

  render(){
    return(
        <Marker
            title={this.props.location.name}
            position={this.props.position}
        >
        </Marker>
    );
  }
}
export default MapMarker
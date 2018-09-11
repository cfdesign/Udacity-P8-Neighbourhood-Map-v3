import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapMarker from "./marker";

const Map = withScriptjs(withGoogleMap((props) => {
  console.log(props.locations+" from map")
  return (
      <GoogleMap
        defaultZoom={16}
        center={ { lat:  51.377770, lng: 0.100793} }
        >
        {props.locations.map( location =>
            <MapMarker
                key={location.id}
                location={location}
                position={{lat: location.location.lat, lng: location.location.lng}}
            />)}
      </GoogleMap>
    );
  }
))

export default Map;
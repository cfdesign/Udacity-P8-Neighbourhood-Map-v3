import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapMarker from "./marker";
import MapInfoWindow from "./info-window";


const Map = withScriptjs(withGoogleMap((props) => {
    //console.log(props.searchResult+" from map")
    return (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={ { lat:  51.377770, lng: 0.100793} }
            onClick={() => props.markerClicked(null)}
            >
            {props.searchResult.map( location =>
                <MapMarker
                    key={location.id}
                    location={location}
                    markerClicked={props.markerClicked}
                    listId={props.listId}
                />
            )}
            {props.markerLocation &&
                <MapInfoWindow
                    markerLocation={props.markerLocation}
                    markerClicked={props.markerClicked}
                />
            }
        </GoogleMap>
    );
}))

export default Map;
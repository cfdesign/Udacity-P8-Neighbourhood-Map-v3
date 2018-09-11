import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
//import Marker from "./marker";

const Map = withScriptjs(withGoogleMap((props) =>{

  /*const markers = props.doctors.map( doctor => <DoctorMarker
                    key={doctor.uid}
                    doctor={doctor}
                    location={{lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon}}
                  />);*/

  return (
      <GoogleMap
        defaultZoom={16}
        center={ { lat:  51.377770, lng: 0.100793} }
        >
        {/*markers*/}
      </GoogleMap>
    );
  }
))

export default Map;
import React, { Component } from 'react';
import MapContainer from './components/map-container';
import LocationsSideList from './components/locations-side-list';
import './App.css';

class App extends Component {
  state = {
    locations : [],
    searchResult: [],
    errorMsg:[],
    listClick: '',
    sideHidden: false
  }

  componentDidMount() {
  /* This fetch request kicks off proceedings. It accepts lat/lngs,
  * then searches within a given radius for locations/listings.
  * These will then be used to populate markers on google maps along
  * with the sidebar listings.
  */
    this.fetchlocations();
  }


  hideShowSide = () => {
		this.setState({sideHidden: !this.state.sideHidden})
	}

  /*setMenu() {
    /*
    * This function places an eventlistener on the button
    * for the sliding side list menu.
    *
   const menu = document.querySelector('#menu'),

   drawer = document.querySelector('.nav');
  //toggle the drawer when the menu is clicked.
   menu.addEventListener('click', function(e) {
     drawer.classList.toggle('open');
     e.stopPropagation();
   });
}*/

  fetchlocations() {
    const lat = 51.377770,
    lng = 0.100793,
    client = '22K1JZDUHN2XDWCGELOXBGM3HYTQ2WJO0DLVHWHXH2LTY0X1',
    secret = '30Y3D4Y2GEARIEQY2MZNLNIDAPYTT14TBUJYIOP4RGG25UNZ';
    fetch(
      `https://api.foursquare.com/v2/venues/explore?ll=${lat},${lng}&radius=400&v=20180701&client_id=${client}&client_secret=${secret}`)
      .then(response => response.json())
      .then(response => {
        /* any other status code returned than 200 is an error
        * the returned error data is extracted, stored in state & displayed to the user.
        */
        if (response.meta.code !== 200) {
          this.setError(`Error Code: ${response.meta.code}, Error Detail: ${response.meta.errorDetail}`);
          return;
        } else {
          this.setLocations(response.response.groups[0].items);
          //this.setMenu();
        }
      })
      .catch(() => {
        // If the fetch fails a different message is store in state.
        this.setError("Error Detail: Fetch RequestFailed");
      })
  }

  setLocations(locations) {
    let setLocations = locations.map(location => location.venue)
    // locations state, stores retrieves a permantent list of locations
    this.setState({locations: setLocations})
    /* search state will mirror locations state initially, but change depending on search criteria
    * this state will manipulate both the search list and the map markers.
    */
    this.setState({searchResult: setLocations})
    //console.log(this.state.locations)
  }
  render() {
    return (
      <div className="App">
      {this.state.locations[0] && (
        <MapContainer
          locations={this.state.locations}
        />
      )}
      </div>
    );
  }
}

export default App;

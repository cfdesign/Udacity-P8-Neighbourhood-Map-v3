import React, { Component } from 'react';
import MapContainer from './components/map-container';
import LocationsSideList from './components/locations-side-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer/>
      </div>
    );
  }
}

export default App;

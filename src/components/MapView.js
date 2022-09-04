import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { points } from '../assets/points';
import Markers from './VenueMarkers';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 54.830594, lng: 40.703231 },
      zoom: 13,
      maxZoom: 20,
    };
  }

  componentDidMount() {
    const controlAttr = document.querySelector('.leaflet-control-attribution');
    if (controlAttr) {
      controlAttr.style.display = 'none';
    }
  }

  render() {
    const { currentLocation, zoom, maxZoom } = this.state;

    const handleViewportChanged = props => {
      const { zoom } = props;
      this.setState(prev => ({ ...prev, zoom: zoom }));
    };

    return (
      <Map
        center={currentLocation}
        zoom={zoom}
        maxZoom={maxZoom}
        onViewportChanged={handleViewportChanged}
      >
        <TileLayer
          url="https://layers.extremum.org/proxy/ggc/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Markers venues={points} mapZoom={zoom} />
      </Map>
    );
  }
}

export default MapView;

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
      maxZoom: 25,
    };
  }

  render() {
    const { currentLocation, zoom, maxZoom } = this.state;

    return (
      <Map center={currentLocation} zoom={zoom} maxZoom={maxZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Markers venues={points} />
      </Map>
    );
  }
}

export default MapView;

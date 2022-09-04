import React, { Fragment } from 'react';
import { Marker } from 'react-leaflet';
import { VenueLocationIcon } from './VenueLocationIcon';
import MarkerPopup from './MarkerPopup';

const VenueMarkers = props => {
  const { venues } = props;

  const markers = venues.map((venue, index) => {
    if (!venue.photo) return null;
    return (
      <Marker key={index} position={venue.coord} icon={VenueLocationIcon}>
        <MarkerPopup data={venue} />
      </Marker>
    );
  });

  return <Fragment>{markers}</Fragment>;
};

export default VenueMarkers;

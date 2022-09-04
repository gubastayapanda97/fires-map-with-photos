import React from 'react';
import { point } from '@turf/helpers';
import L from 'leaflet';
import rhumbDestination from '@turf/rhumb-destination';
import { Marker, Polyline } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { VenueLocationIcon } from './VenueLocationIcon';
import MarkerPopup from './MarkerPopup';

const createClusterCustomIcon = function (cluster) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'marker-cluster-custom',
    iconSize: L.point(20, 20, true),
  });
};

const VenueMarkers = props => {
  const { venues, mapZoom } = props;

  const markers = venues.map((venue, index) => {
    const { azimut, photo, coord } = venue;
    if (!photo) return null;

    const startPoint = point(coord);
    const distance = 2000 / mapZoom;
    const firstPartOfCoord = azimut >= 0 && azimut <= 90;
    const bearing = firstPartOfCoord ? 90 - azimut : 450 - azimut;

    const {
      geometry: { coordinates },
    } = rhumbDestination(startPoint, distance, bearing, {
      units: 'meters',
    });

    return (
      <Marker key={index} position={coord} icon={VenueLocationIcon}>
        <MarkerPopup data={venue} />
        <Polyline positions={[coord, coordinates]} />
      </Marker>
    );
  });

  return (
    <MarkerClusterGroup
      showCoverageOnHover={false}
      maxClusterRadius={20}
      iconCreateFunction={createClusterCustomIcon}
    >
      {markers}
    </MarkerClusterGroup>
  );
};

export default VenueMarkers;

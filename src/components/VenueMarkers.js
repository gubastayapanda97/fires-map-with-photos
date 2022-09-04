import React, { useMemo } from 'react';
import { point } from '@turf/helpers';
import L from 'leaflet';
import rhumbDestination from '@turf/rhumb-destination';
import { Marker, Polyline } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import {
  VenueLocationIcon,
  SelectedVenueLocationIcon,
} from './VenueLocationIcon';
import MarkerPopup from './MarkerPopup';

const createClusterCustomIcon = function (cluster) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'marker-cluster-custom',
    iconSize: L.point(20, 20, true),
  });
};

const VenueMarkers = ({
  venues,
  mapZoom,
  selectedMarker,
  handleMarkerClick,
}) => {
  const markers = useMemo(
    () =>
      venues.map(venue => {
        const { azimut, photo, coord, id } = venue;
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

        const isSelected = selectedMarker?.id === id;

        return (
          <Marker
            key={id}
            position={coord}
            icon={isSelected ? SelectedVenueLocationIcon : VenueLocationIcon}
            onClick={() => handleMarkerClick(venue)}
          >
            {/* <MarkerPopup data={venue} /> */}
            <Polyline positions={[coord, coordinates]} />
          </Marker>
        );
      }),
    [venues, selectedMarker, handleMarkerClick, mapZoom]
  );

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

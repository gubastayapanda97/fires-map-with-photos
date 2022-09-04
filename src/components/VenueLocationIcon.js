import L from 'leaflet';

export const VenueLocationIcon = L.icon({
  iconUrl: require('../assets/venue_location_icon.svg'),
  iconRetinaUrl: require('../assets/venue_location_icon.svg'),
  iconAnchor: [11, 28],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon',
});

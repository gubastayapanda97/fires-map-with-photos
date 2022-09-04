import React from 'react';
import { Popup } from 'react-leaflet';

const MarkerPopup = props => {
  const { coord, azimut, photo } = props.data;
  const coordText = coord.join(', ');

  const handleClick = e => {
    console.log('click', e.target.src);
    window.open(e.target.src);
  };

  return (
    <Popup>
      <div className="poup-text">Координаты: {coordText}</div>
      <div className="poup-text">Азимут: {azimut}</div>
      {photo && (
        <img
          onClick={handleClick}
          src={photo}
          alt={coordText}
          width="240"
          height="135px"
        />
      )}
    </Popup>
  );
};

export default MarkerPopup;

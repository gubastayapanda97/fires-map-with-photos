import React from 'react';

export const SelectedMarkerInfo = ({ selectedMarker }) => {
  if (!selectedMarker) {
    return null;
  }
  const { coord, azimut, photo } = selectedMarker;
  const coordText = coord.join(', ');

  const handleClick = e => {
    console.log('click', e.target.src);
    window.open(e.target.src);
  };
  return (
    <div>
      <div className="poup-text">Координаты: {coordText}</div>
      <div className="poup-text">Азимут: {azimut}</div>
      {photo && (
        <img
          style={{ maxWidth: '100vw', maxHeight: '40vh' }}
          onClick={handleClick}
          src={photo}
          alt={coordText}
        />
      )}
    </div>
  );
};

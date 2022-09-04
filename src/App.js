import React, { useState, useCallback } from 'react';
import MapView from './components/MapView';
import './App.css';

const LAYERS = {
  ggc: {
    url: 'https://layers.extremum.org/proxy/ggc/{z}/{x}/{y}.png',
    maxZoom: 15,
  },
  OpenTopoMap: {
    url: 'https://tile-c.opentopomap.ru/{z}/{x}/{y}.png',
    maxZoom: 18,
  },
  TopoMapper: {
    url: 'https://layers.extremum.org/v2/other/topomapperproxy/{z}/{x}/{y}.jpg',
    maxZoom: 13,
  },
  Yandex: {
    url: 'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&scale=2',
    maxZoom: 17,
  },
  Yandex_Satellite: {
    url: 'https://sat01.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}',
    maxZoom: 19,
  },
  Google_Satellite: {
    url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    maxZoom: 19,
  },
  Google_Hybrid: {
    url: 'http://mts0.google.com/vt/lyrs=y&x={x}&s=&y={y}&z={z}',
    maxZoom: 20,
  },
  rosReestr: {
    url: 'https://ngw.fppd.cgkipd.ru/tile/56/{z}/{x}/{y}.png',
    maxZoom: 14,
  },
  '2GIS': {
    url: 'http://tile0.maps.2gis.com/tiles?v=1&x={x}&y={y}&z={z}',
    maxZoom: 16,
  },
  OpenStreetMap: {
    url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
    maxZoom: 18,
  },
};

function App() {
  const [tileLayer, setTileLayer] = useState('ggc');

  const handleTileLayerChange = e => {
    setTileLayer(e.target.value);
  };

  const Map = useCallback(() => {
    return <MapView tileLayerConfig={LAYERS[tileLayer]} />;
  }, [tileLayer]);

  return (
    <div className="App">
      <select
        name="tileLayers"
        id="tileLayers"
        style={{ margin: '10px' }}
        value={tileLayer}
        onChange={handleTileLayerChange}
      >
        <option value="ggc">ГГЦ</option>
        <option value="OpenStreetMap">OpenStreetMap</option>
        <option value="OpenTopoMap">OpenTopoMap</option>
        <option value="TopoMapper">TopoMapper</option>
        <option value="Yandex">Яндекс Карты</option>
        <option value="Yandex_Satellite">Яндекс Спутник</option>
        <option value="Google_Satellite">Google Satellite</option>
        <option value="Google_Hybrid">Google Hybrid</option>
        <option value="rosReestr">Росреестр</option>
        <option value="2GIS">2Gis</option>
      </select>
      <Map />
    </div>
  );
}

export default App;

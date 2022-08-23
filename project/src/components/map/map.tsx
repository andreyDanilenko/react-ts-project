import { useRef, useEffect, useState } from 'react';
import {Map, TileLayer} from 'leaflet';

// import { useMap } from 'src/hooks';
import { City, Point } from 'src/types/offers';

type Props = {
    city: City
    points: Point[]
    selectedPoint: Point | undefined
}


const MapComponent = ({ city, points, selectedPoint}: Props): JSX.Element => {
  const mapRef = useRef(null);
  const [map, setMap] = useState<Map | null>(null);
  // const map = useMap(mapRef, city);

  // eslint-disable-next-line no-console
  console.log(city, selectedPoint);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: 10
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, city]);


  return (
    <div
      style={{ height: '500px' }}
      ref={mapRef}
    >


    </div>
  );
};

export default MapComponent;

import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { useMap } from 'src/hooks';
import { City, Point } from 'src/types/offers';

type Props = {
    city: City
    points: Point[]
    selectedPoint: Point | undefined
}

const defaultCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map = ({ city, points, selectedPoint}: Props): JSX.Element => {
  const mapRef = useRef(null);
  // const [map, setMap] = useState<Map | null>(null);
  const map = useMap(mapRef, city);

  // eslint-disable-next-line no-console
  console.log(map, city, selectedPoint);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);


  return (
    <div
      style={{ height: '500px' }}
      ref={mapRef}
    >


    </div>
  );
};

export default Map;

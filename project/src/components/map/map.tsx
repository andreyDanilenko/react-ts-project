import { useRef, useEffect } from 'react';
import leaflet, { Icon, Marker } from 'leaflet';
import { useMap } from 'src/hooks';
import { City, Offer, Point } from 'src/types/offers';
import 'leaflet/dist/leaflet.css';

type Props = {
    city: City
    offers: Offer[]
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

function Map(props: Props): JSX.Element {
  const { city, offers, selectedPoint } = props;
  const { latitude, longitude, zoom } = city.location;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView({ lat: latitude, lng: longitude }, zoom, { animate: true, duration: 1 });

      const markers = offers.map((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && offer.city.name === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          );

        return marker;
      });

      const layerGroup = leaflet.layerGroup(markers);

      map.addLayer(layerGroup);

      return () => {
        map.removeLayer(layerGroup);
      };
    }
  }, [selectedPoint, latitude, longitude, map, zoom, offers]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;

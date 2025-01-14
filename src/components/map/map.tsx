import {useRef, useEffect } from 'react';
import leaflet, {layerGroup, Marker} from 'leaflet';
import useMap from '../../hook/use-map.tsx';
import {OfferPreview} from '../../types/offer.ts';
import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';


type MapProps = {
  activeCard: OfferPreview;
  offers: OfferPreview[];
  isNearby?: boolean;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

export default function Map({ offers, activeCard, isNearby}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.map(({location, id}) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });
        marker
          .setIcon(
            activeCard.id === id ? currentCustomIcon : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });

      if (isNearby) {
        const marker = new Marker({
          lat: activeCard.location.latitude,
          lng: activeCard.location.longitude,
        });
        marker.setIcon(currentCustomIcon).addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCard, isNearby]);


  return (
    <section
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
        margin: '0 auto',
      }}
      ref={mapRef}
    >
    </section>
  );
}



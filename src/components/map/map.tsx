import {useRef, useEffect } from 'react';
import leaflet, {layerGroup, Marker} from 'leaflet';
import useMap from '../hook/use-map.tsx';
import {OfferPreview} from '../../types/offer.ts';

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';

type MapProps = {
  activeCard: OfferPreview;
  offers: OfferPreview[];
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

export default function Map({ offers, activeCard}: MapProps) {
  const mapRef = useRef(null);
  const {city} = activeCard;
  const map: leaflet.Map | null = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.map(({ location, id }) => {
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


      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCard]);

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

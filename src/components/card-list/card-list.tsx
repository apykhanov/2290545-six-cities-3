import Card from '../card/card.tsx';
import {OfferPreview} from '../../types/offer.ts';


type CardListProps = {
  offers: OfferPreview[];
  setActiveCard: (offer: OfferPreview) => void;
};

export default function CardList({offers, setActiveCard}: CardListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} setCurrentCard={setActiveCard} />
      ))}
    </div>
  );


}

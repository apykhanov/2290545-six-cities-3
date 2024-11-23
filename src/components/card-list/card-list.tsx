import Card from '../card/card.tsx';
import {Offer} from '../../types/offer.ts';
import {useState} from 'react';

type CardListProps = {
  offers: Offer[];
  onMouseOver?: (evt: MouseEvent) => void;
};

export default function CardList({offers}: CardListProps) {
  const [activeCard, setActiveCard] = useState('');
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onMouseOver={() => setActiveCard(offer.id)}/>
      ))}
    </div>
  );


}

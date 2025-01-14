import {useState} from 'react';
import {OfferPreview} from '../types/offer.ts';
import {useAppSelector} from './use-app-selector.tsx';

export const useActiveCard = () => {
  const offers = useAppSelector((state) => state.offers);
  const [activeCard, setActiveCard] = useState<OfferPreview>(offers[0]);

  return {activeCard, setActiveCard};
};

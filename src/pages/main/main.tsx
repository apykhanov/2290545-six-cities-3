import Sort from '../../components/sort/sort.tsx';
import CardList from '../../components/card-list/card-list.tsx';
import Map from '../../components/map/map.tsx';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import Header from '../../components/header/header.tsx';
import {OfferPreview} from '../../types/offer.ts';
import {useState} from 'react';


type MainProps = {
  offers: OfferPreview[];
}

export default function Main({offers}: MainProps) {
  const [activeCard, ] = useState(offers[0]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <Header/>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sort/>
              <CardList offers={offers}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} activeCard={activeCard}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



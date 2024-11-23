import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import Header from '../../components/header/header.tsx';
import {OfferPreview} from '../../types/offer.ts';

import FavoriteCard from '../../components/favorite-card/favorite-card.tsx';

type FavoriteProps = {
  offers: OfferPreview[];
};

export default function Favorites({offers}: FavoriteProps) {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <Header/>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) => (
                    <FavoriteCard key={offer.id} offer={offer}/>
                  ))}
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) => (
                    <FavoriteCard key={offer.id} offer={offer} />
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img
            className="footer__logo"
            src="/img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}


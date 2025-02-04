import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import Header from '../../components/header/header.tsx';
import { OfferPreview } from '../../types/offer.ts';
import FavoriteCard from '../../components/favorite-card/favorite-card.tsx';
import { useAppSelector } from '../../hook/use-app-selector.tsx';
import { getFavorites, getFavoritesLoadingStatus } from '../../store/favorites/selector.ts';
import FullPageLoader from '../../components/full-page-loader/full-page-loader.tsx';

export default function Favorites() {
  const favorites = useAppSelector(getFavorites);
  const isLoading = useAppSelector(getFavoritesLoadingStatus);


  if (isLoading) {
    return <FullPageLoader/>;
  }


  if (favorites.length === 0) {
    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <Header />
          </div>
        </header>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">No favorites found</h1>
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


  const favoritesByCity = favorites.reduce<{ [city: string]: OfferPreview[] }>((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }
    acc[offer.city.name].push(offer);
    return acc;
  }, {});

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <Header />
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesByCity).map(([city, offers]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to="#">
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.map((offer) => (
                      <FavoriteCard key={offer.id} offer={offer} />
                    ))}
                  </div>
                </li>
              ))}
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

import Header from '../../components/header/header.tsx';
import ReviewForm from '../../components/review-form/review-form.tsx';
import {AppRoute, housing} from '../../const.ts';
import {OfferDetail, OfferPreview} from '../../types/offer.ts';
import {getRatingStarsStyle} from '../../utils/utils.ts';
import {Navigate, useParams} from 'react-router-dom';
import {Review} from '../../types/review.ts';
import {ReviewItem} from '../../components/review-item/review-item.tsx';
import Card from '../../components/card/card.tsx';
import Map from '../../components/map/map.tsx';
import {useState} from 'react';

const MAX_NEAR_OFFERS_AMOUNT = 3;
const MAX_IMAGES_AMOUNT = 6;

type CardOfferProps = {
  cardOffers: OfferDetail[];
  reviews: Review[];
  offers: OfferPreview[];
}

export default function CardOffer({cardOffers, reviews, offers}: CardOfferProps) {

  const {id} = useParams();
  const currentOffer = cardOffers.find((item) => item.id === id);
  const [activeCard, setActiveCard] = useState<OfferPreview>(offers[0]);

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const {images, title, rating, type, price, host,
    bedrooms, maxAdults, goods} = currentOffer;


  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <Header/>
        </div>
      </header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.slice(0, MAX_IMAGES_AMOUNT).map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: getRatingStarsStyle(rating)}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{housing[type]}</li>
                <li className="offer__feature offer__feature--bedrooms">{bedrooms}</li>
                <li className="offer__feature offer__feature--adults">{maxAdults}</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (
                    <li key={good} className="offer__inside-item">{good}</li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  <span className="offer__user-status">{host.isPro}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the
                    unique lightness of Amsterdam. The building is green and from
                    18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ul className="reviews__list">
                  {reviews.map((review) => (
                    <ReviewItem review={review} key={review.id} />
                  ))}
                </ul>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map offers={offers} activeCard={activeCard} isNearby/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offers.slice(0, MAX_NEAR_OFFERS_AMOUNT).map((offer) => (
                <Card offer={offer} key={offer.id} setCurrentCard={(newActiveCard) => setActiveCard(newActiveCard)} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}



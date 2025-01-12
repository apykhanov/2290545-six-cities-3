import Main from './pages/main/main.tsx';
import Favorites from './pages/favorites/favorites.tsx';
import Login from './pages/login/login.tsx';
import NotFound from './pages/notfound/notFound.tsx';
import CardOffer from './pages/card-offer/card-offer.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const.ts';
import PrivateRoute from './components/private-route/private-route.tsx';
import {OfferDetail, OfferPreview} from './types/offer.ts';
import {Review} from './types/review.ts';
import {useAppSelector} from './hook/use-app-selector.tsx';
import FullPageLoader from './components/full-page-loader/full-page-loader.tsx';


type AppProps = {
  offers: OfferPreview[];
  reviews: Review[];
  cardOffers: OfferDetail[];
}

export default function App({offers, reviews, cardOffers}: AppProps) {
  const isOffersLoaded = useAppSelector((state) => state.isOffersLoaded);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (!isOffersLoaded && AuthorizationStatus.Unknown === authorizationStatus) {
    return <FullPageLoader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main />}
        />
        <Route
          path={`${AppRoute.cardOffer}/:id`}
          element={<CardOffer offers={offers} cardOffers={cardOffers} reviews={reviews}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}


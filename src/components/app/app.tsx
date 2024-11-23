import Main from '../../pages/main/main.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Login from '../../pages/login/login.tsx';
import NotFound from '../../pages/notfound/notFound.tsx';
import CardOffer from '../../pages/card-offer/card-offer.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import PrivateRoute from '../private-route/private-route.tsx';
import {Offer} from '../../types/offer.ts';
import {CardOffer} from '../../types/card-offer.ts';


type AppProps = {
  offers: Offer[];
  reviews: CardOffer[];
}

export default function App({offers, reviews}: AppProps) {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main offers={offers} />}
        />
        <Route
          path={`${AppRoute.cardOffer}/:offerId`}
          element={<CardOffer offers={offers} />}
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


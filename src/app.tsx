import Main from './pages/main/main.tsx';
import Login from './pages/login/login.tsx';
import NotFound from './pages/notfound/notFound.tsx';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const.ts';
import {useAppSelector} from './hook/use-app-selector.tsx';
import FullPageLoader from './components/full-page-loader/full-page-loader.tsx';
import browserHistory from './browserHistory/browserHistory.ts';
import HistoryRouter from './components/HistoryRouter/HistoryRouter.tsx';
import {getAuthCheckedStatus, getAuthorizationStatus} from './store/user-process/selector.ts';
import {getOfferDataLoadingStatus} from './store/data-offer/selector.ts';


export default function App() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersDataLoading = useAppSelector(getOfferDataLoadingStatus);


  if (!isOffersDataLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return <FullPageLoader />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main />}
        />
        {/*<Route*/}
        {/*  path={`${AppRoute.cardOffer}/:id`}*/}
        {/*  element={<CardOffer offers={offers} reviews={reviews}/>}*/}
        {/*/>*/}
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        {/*<Route*/}
        {/*  path={AppRoute.Favorites}*/}
        {/*  element={*/}
        {/*    <PrivateRoute*/}
        {/*      authorizationStatus={AuthorizationStatus.Auth}*/}
        {/*    >*/}
        {/*      <Favorites offers={offers} />*/}
        {/*    </PrivateRoute>*/}
        {/*  }*/}
        {/*/>*/}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}


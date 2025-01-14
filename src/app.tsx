import Main from './pages/main/main.tsx';
import Login from './pages/login/login.tsx';
import NotFound from './pages/notfound/notFound.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const.ts';
import {useAppSelector} from './hook/use-app-selector.tsx';
import FullPageLoader from './components/full-page-loader/full-page-loader.tsx';


export default function App() {
  const isOffersLoaded = useAppSelector((state) => state.isOffersLoaded);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (!isOffersLoaded || authorizationStatus === AuthorizationStatus.Unknown) {
    return <FullPageLoader />;
  }

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}


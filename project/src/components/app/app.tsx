import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  MainPage,
  LoginPage,
  RoomPage,
  FavoritesPage,
  NotFoundPage,
  LayoutPage,
} from 'src/pages';
import { PrivateRoute, PublicRoute } from 'src/components';
import { AppRoute, AuthorizationStatus } from 'src/utils/const';
import { useAppSelector } from 'src/hooks';
import LoadingBlock from '../loading-block/loading-block';
import { getLoadedOffers, getOffers } from 'src/store/offer-process/selectors';
import { getAuthStatus } from 'src/store/auth-process/selectors';

const App = (): JSX.Element => {
  const offers = useAppSelector(getOffers);
  const loadingOffers = useAppSelector(getLoadedOffers);
  const authorizationStatus = useAppSelector(getAuthStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || loadingOffers) {
    return (
      <LoadingBlock/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route
            path={AppRoute.MainPage}
            element={<MainPage offers={offers} />}
          />

          <Route path={AppRoute.RoomPage} element={<RoomPage />} />
          <Route
            path={AppRoute.FavoritesPage}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.LoginPage}
            element={
              <PublicRoute authorizationStatus={authorizationStatus}>
                <LoginPage />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

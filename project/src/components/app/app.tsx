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

const App = (): JSX.Element => {
  const { offers, loading, authorizationStatus } = useAppSelector((state) => state);

  if (authorizationStatus === AuthorizationStatus.Unknown || loading) {
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
          <Route path={AppRoute.RoomPage} element={<RoomPage offers={offers} />} />
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

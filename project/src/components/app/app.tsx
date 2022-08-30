import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  MainPage,
  LoginPage,
  RoomPage,
  FavoritesPage,
  NotFoundPage,
  Layout,
} from 'src/pages';
import { PrivateRoute, PublicRoute } from 'src/components';
import { AppRoute, AuthorizationStatus } from 'src/utils/const';
import { useAppSelector } from 'src/hooks';

const App = (): JSX.Element => {
  const {offers, loading, error} = useAppSelector((state) => state);
  switch (true) {
    case loading:
      return <p>Loading</p>;
    case !offers.length:
      return <p>No data</p>;
    case !!error:
      return <p>Error</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path={AppRoute.MainPage}
            element={<MainPage offers={offers} />}
          />
          <Route path={AppRoute.RoomPage} element={<RoomPage offers={offers} />} />
          <Route
            path={AppRoute.FavoritesPage}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.LoginPage}
            element={
              <PublicRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <LoginPage />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );};

export default App;

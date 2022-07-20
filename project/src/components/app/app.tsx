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
import { Offers } from 'src/types/offers';

type Props = {
  offers: Offers;
};

const App = (props: Props): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route
          path={AppRoute.MainPage}
          element={<MainPage offers={props.offers} />}
        />
        <Route path={AppRoute.RoomPage} element={<RoomPage />} />
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
);

export default App;

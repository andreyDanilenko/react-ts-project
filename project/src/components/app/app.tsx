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
import { AppRoute, AuthorizationStatus } from '../../utils/const';
import { Offers, Reviews } from '../../types/offers';

type Props = {
  offers: Offers;
  reviews: Reviews;
};

const App = (props: Props): JSX.Element => {
  // eslint-disable-next-line no-console
  console.log(props.reviews);
  return (
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
};

export default App;

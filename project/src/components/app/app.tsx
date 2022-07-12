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

type Props = {
  rentalCount: number;
};

const App = (props: Props): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route
          path={AppRoute.MainPage}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MainPage rentalCount={props.rentalCount} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.RoomPage}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <RoomPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.FavoritesPage}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.LoginPage}
          element={
            <PublicRoute authorizationStatus={AuthorizationStatus.Auth}>
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

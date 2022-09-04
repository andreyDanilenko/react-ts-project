import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../utils/const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PublicRoute(props: PrivateRouteProps): JSX.Element {

  const {authorizationStatus, children} = props;
  // eslint-disable-next-line no-console
  console.log(authorizationStatus);


  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.MainPage} />
  );
}

export default PublicRoute;

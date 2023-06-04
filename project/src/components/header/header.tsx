import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { logoutAction } from 'src/store/api-action';
import { getAuthStatus } from 'src/store/auth-process/selectors';
import { getUser } from 'src/store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from 'src/utils/const';

const Header = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleSubmit = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a href="#f" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">

            {user && authorizationStatus === AuthorizationStatus.Auth
              ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#m">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user.name}</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a onClick={handleSubmit} className="header__nav-link" href="/login">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
              :
              location.pathname !== '/login' &&
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <Link to={AppRoute.LoginPage} className="header__nav-link">
                    <span className="header__signout">Sign in</span>
                  </Link>
                </li>
              </ul>}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

export enum AppRoute {
    LoginPage = '/login',
    RoomPage = '/offer/:id',
    FavoritesPage = '/favorites',
    MainPage = '/'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum APIRoute {
    Offers = '/hotels',
    Review = '/comments',
    Favorites = '/favorite',
    Login = '/login',
    Logout = '/logout',
  }

export const TIMEOUT_SHOW_ERROR = 2000;

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

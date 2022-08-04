export enum AppRoute {
  Login = '/login',
  Root = '/',
  MyList = '/myList',
  MoviePage = '/films/:id',
  AddReview = '/films/:id/review',
  Player = 'player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

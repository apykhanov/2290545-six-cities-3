export const Setting = {
  cardCount: 6,
};

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  cardOffer = '/card-offer/:id',
  Root = '/',
  NotFound = '/not-found',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const housing: Record<string, string> = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel'
};

export const MAX_STARS_RATING = 20;

export const MAX_COMMENTS_LENGTH = 140;
export const MIN_COMMENTS_LENGTH = 50;

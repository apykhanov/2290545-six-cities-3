export const Setting = {
  cardCount: 6,
};

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  cardOffer = '/card-offer',
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

export const SortingMap = {
  Popular: 'Popular',
  LowToHigh: 'Price: Low To High',
  HighToLow: 'Price: High To Low',
  TopRated: 'Top rated first',
} as const;

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const DEFAULT_CITY = 'Paris';
export const DEFAULT_SORTING = 'Popular';

export const MAX_STARS_RATING = 20;

export const MAX_COMMENTS_LENGTH = 140;
export const MIN_COMMENTS_LENGTH = 50;

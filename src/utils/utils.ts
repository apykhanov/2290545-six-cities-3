import {MAX_STARS_RATING} from '../const.ts';

export function getRatingStarsStyle(rating: number): string {
  return `${MAX_STARS_RATING * rating}%`;
}

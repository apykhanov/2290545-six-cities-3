import {Review} from '../types/review.ts';

export const reviewMock: Review[] = [

  {
    'id': '1ce82aab-eea3-4ab6-ae27-57ac0eeefe40',
    'comment': 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    'date': '2024-10-31T21:00:00.458Z',
    'rating': 1,
    'user': {
      'name': 'Isaac',
      'avatarUrl': 'https://13.design.htmlacademy.pro/static/avatar/5.jpg',
      'isPro': true
    }
  },
  {
    'id': '4d97269a-ef4d-4507-ae96-ae75445b6ddb',
    'comment': 'Bathed in the nature. Completely unplugged. Unforgettable.',
    'date': '2024-10-31T21:00:00.458Z',
    'rating': 4,
    'user': {
      'name': 'Emely',
      'avatarUrl': 'https://13.design.htmlacademy.pro/static/avatar/8.jpg',
      'isPro': false
    }
  }
];

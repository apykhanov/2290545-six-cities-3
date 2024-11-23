type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};
type City = {
  name: string;
  location: Location;
};

type Goods = [{
  heating: string;
}]

export type CardOffer = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: Goods[];

}

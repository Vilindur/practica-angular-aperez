export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  genres: Genre[];
  short_screenshots: Screenshot[];
  stores: Store[];
  playtime: number;
  reviews_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ApiResponse {
  results: Game[];
  count: number;
  next: string;
  previous: string;
}

export interface Screenshot {
  id: number;
  image: string;
}

export interface Store {
  id: number;
  store: {
    id: number;
    name: string;
  };
}

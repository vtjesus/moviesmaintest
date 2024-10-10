export const BASE_URL = 'https://api.themoviedb.org/3/'

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTUxNWZmZThmN2QyOTdlMjU0YjYyZWY0M2Q0MmE3OCIsIm5iZiI6MTcyNzg5MjA0OS44ODUyMTcsInN1YiI6IjY2ZmQ4NzhkYjE0NjI4MmY3Yjg0YWU5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l9PvvJgLqjUsYthKJmjZO6rw9Y722ZqloilmenHlI7c'

export const ENDPOINTS = {
  now_playing: '/movie/now_playing',
  popular: '/movie/popular',
  top_rated: '/movie/top_rated',
  movie_details: '/movie/',
  genres: '/genre/movie/list'
}

export const MOVIE_LISTS = {
  now_playing: { title: 'Now playing movies', endpoint: ENDPOINTS.now_playing },
  popular: { title: 'Popular movies', endpoint: ENDPOINTS.popular },
  top_rated: { title: 'Top rated movies', endpoint: ENDPOINTS.top_rated }
}

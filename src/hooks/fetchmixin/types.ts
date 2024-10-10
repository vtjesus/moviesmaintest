export interface MovieI {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface GenreI {
  id: number
  name: string
}

export interface ParamsI {
  page?: number
  sort_by?: keyof typeof SortBy
}

enum SortBy {
  ORIGINAL_TITLE_ASC = 'original_title.asc',
  ORIGINAL_TITLE_DESC = 'original_title.desc',
  POPULARITY_ASC = 'popularity.asc',
  POPULARITY_DESC = 'popularity.desc',
  REVENUE_ASC = 'revenue.asc',
  REVENUE_DESC = 'revenue.desc',
  PRIMARY_RELEASE_DATE_ASC = 'primary_release_date.asc',
  TITLE_ASC = 'title.asc',
  TITLE_DESC = 'title.desc',
  PRIMARY_RELEASE_DATE_DESC = 'primary_release_date.desc',
  VOTE_AVERAGE_ASC = 'vote_average.asc',
  VOTE_AVERAGE_DESC = 'vote_average.desc',
  VOTE_COUNT_ASC = 'vote_count.asc',
  VOTE_COUNT_DESC = 'vote_count.desc'
}

export interface FetchMixinData<T> {
  data: T | null
  loading: boolean
  error: string | null
}

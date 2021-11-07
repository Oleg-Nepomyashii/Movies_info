export interface moviesStateReducer {
    movies: IMovie[],
    loading: boolean,
    error: null | string,
    page: number,
    totalPages: number,
    perPage: number,
    movieInfo: null | IMovieInfo
}

export enum moviesActionTypes {
    FETCH_MOVIES = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
    SET_TOTAL_PAGES = 'SET_TOTAL_PAGES',
    FETCH_MOVIE_INFO = 'FETCH_MOVIE_INFO',
    FETCH_MOVIE_INFO_SUCCESS = 'FETCH_MOVIE_INFO_SUCCESS',
    FETCH_MOVIE_INFO_ERROR = 'FETCH_MOVIE_INFO_ERROR',
    RESET_MOVIE_INFO = 'RESET_MOVIE_INFO'

}

interface FetchMovies {
    type: moviesActionTypes.FETCH_MOVIES,
    payload?: any[]
}

interface FetchMoviesSuccess {
    type: moviesActionTypes.FETCH_MOVIES_SUCCESS,
    payload: any[]
}

interface FetchMoviesError {
    type: moviesActionTypes.FETCH_MOVIES_ERROR,
    payload: string
}

interface setTotalPages {
    type: moviesActionTypes.SET_TOTAL_PAGES,
    payload: number
}

interface FetchMovieInfo {
    type: moviesActionTypes.FETCH_MOVIE_INFO,
}
interface FetchMovieInfoSuccess {
    type: moviesActionTypes.FETCH_MOVIE_INFO_SUCCESS,
    payload: any
}
interface FetchMovieInfoError {
    type: moviesActionTypes.FETCH_MOVIE_INFO_ERROR,
    payload: string
}

export type moviesAction = FetchMovies | FetchMoviesSuccess | FetchMoviesError | setTotalPages
export type movieActionInfo = FetchMovieInfo | FetchMovieInfoSuccess | FetchMovieInfoError 

export interface IMovie {
    adult: boolean,
    backdrop_path: string,
    id: number,
    original_title: string,
    overview: string,
    popularity: number
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
export interface IMovieInfo {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: null
    budget: number
    genres: IGengesMovie[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: IProductionCompany[]
    production_countries: IProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface IGengesMovie {
    id: number
    name: string
}

export interface IProductionCompany {
    id: number
    nlogo_path: string
    name: string
    origin_country: string
}

export interface IProductionCountry {
    iso_3166_1: string
    name: string
}
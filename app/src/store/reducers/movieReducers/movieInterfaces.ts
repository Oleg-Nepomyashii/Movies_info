export interface moviesStateReducer {
    movies: IMovie[],
    loading: boolean,
    error: null | string,
    page: number,
    totalPages: number,
    perPage: number
}

export enum moviesActionTypes {
    FETCH_MOVIES = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
    SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
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

export type moviesAction = FetchMovies | FetchMoviesSuccess | FetchMoviesError | setTotalPages

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
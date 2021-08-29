export interface moviesStateReducer {
    movies: any[],
    loading: boolean,
    error: null | string,
}

export enum moviesActionTypes {
    FETCH_MOVIES = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
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

export type moviesAction = FetchMovies | FetchMoviesSuccess | FetchMoviesError

const initialState: moviesStateReducer = {
    movies: [],
    loading: false,
    error: null,
}

export const movieReducer = (state = initialState , action: moviesAction):  moviesStateReducer => {
    switch(action.type) {
        case moviesActionTypes.FETCH_MOVIES: {
           return {
               ...state,
               loading: true,
           }
        }
        case moviesActionTypes.FETCH_MOVIES_ERROR: {
         return {
             ...state,
             loading: false,
             error: action.payload
         }
        }
        case moviesActionTypes.FETCH_MOVIES_SUCCESS: {
           return {
               ...state,
               loading: false,
               movies: action.payload
           }
        }
        default: return state
 }
}




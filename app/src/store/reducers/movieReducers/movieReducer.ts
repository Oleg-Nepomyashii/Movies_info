import {moviesStateReducer , moviesAction , moviesActionTypes, movieActionInfo} from './movieInterfaces';

const initialState: moviesStateReducer = {
    movies: [],
    loading: false,
    error: null,
    page: 1,
    perPage: 20,
    totalPages: 0,
    movieInfo: null
}

export const movieReducer = (state = initialState , action: moviesAction | movieActionInfo):  moviesStateReducer => {
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
        case moviesActionTypes.SET_TOTAL_PAGES: {
            return {
                ...state,
                totalPages: action.payload
            }
        }
        case moviesActionTypes.FETCH_MOVIE_INFO: {
            return {
                ...state,
                loading: true
            }
        }
        case moviesActionTypes.FETCH_MOVIE_INFO_SUCCESS: {
            console.log(action);
            
            return {
                ...state,
                loading: false,
                movieInfo: action.payload
            }
        }
        case moviesActionTypes.FETCH_MOVIE_INFO_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: return state
 }
}




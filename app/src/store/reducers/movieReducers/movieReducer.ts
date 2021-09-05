import {moviesStateReducer , moviesAction , moviesActionTypes} from './movieInterfaces';

const initialState: moviesStateReducer = {
    movies: [],
    loading: false,
    error: null,
    page: 1,
    perPage: 20,
    totalPages: 0
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
        case moviesActionTypes.SET_TOTAL_PAGES: {
            return {
                ...state,
                totalPages: action.payload
            }
        }
        default: return state
 }
}




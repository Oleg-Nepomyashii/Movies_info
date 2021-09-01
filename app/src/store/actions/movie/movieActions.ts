import { Dispatch } from "redux";
import { moviesAction, moviesActionTypes } from "../../reducers/movieReducers/movieReducer";
import axios from "axios";

export const fetchMovies = (type: string) => {
    return async (dispatch: Dispatch<moviesAction>) => {
        try {
            dispatch({type: moviesActionTypes.FETCH_MOVIES , payload: [] })
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=ef1b11c4be0de67830e77b4e307aab6b`)
            console.log(response)
            dispatch({type: moviesActionTypes.FETCH_MOVIES_SUCCESS , payload: response.data.results})
        } catch(e) {
            dispatch({type: moviesActionTypes.FETCH_MOVIES_ERROR , payload: 'Error to load movies'})
        }
    }
}
import { combineReducers } from "redux";
import {movieReducer} from './movieReducers/movieReducer'


export const rootReducer = combineReducers({
    movies: movieReducer
})
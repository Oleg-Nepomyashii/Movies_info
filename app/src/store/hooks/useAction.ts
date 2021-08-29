import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as moviesActionCreators from '../actions/movie/movieActions';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(moviesActionCreators , dispatch)
}
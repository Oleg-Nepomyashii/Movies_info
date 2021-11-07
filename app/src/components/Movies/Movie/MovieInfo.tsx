import { useEffect } from "react"
import { useParams } from "react-router"
import { useActions } from "../../../store/hooks/useAction"
import { usedTypedSelectror } from "../../../store/hooks/usedTypesSelectror"
import { Loader } from "../../Loader/Loader"
import {IMovieInfo} from '../../../store/reducers/movieReducers/movieInterfaces'

interface IMovieInfoParams {
    movieId: string
}

export const MovieInfo: React.FC = () => {
    const {movieId} = useParams<IMovieInfoParams>()

    const isLoading = usedTypedSelectror((state) => state.movies.loading)
    const movie = usedTypedSelectror((state) => state.movies.movieInfo)
    const movieActions = useActions()
    
    useEffect(() => {
        movieActions.fetchMovieInfo(movieId)
    }, [movieId])

    if(isLoading) {
        return <Loader />
    }

    if(!movie) {
        return <div>NO MOVIE INFO</div>
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <img style={{
                height: '400px',
                width: '200px'
            }} src={'https://image.tmdb.org/t/p/original' + movie.poster_path} alt={movie.title} />
            <p>{movie.budget}</p>
            <p>{movie.overview}</p>
            <p>{movie.video}</p>
            <p>{movie.vote_average}</p>
            <p>{movie.vote_count}</p>
            <p>{movie.status}</p>
            <p>{movie.runtime}</p>
            <p>{movie.revenue}</p>
        </div>
    )
}
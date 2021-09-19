import { IMovie } from "../../store/reducers/movieReducers/movieInterfaces";
import { useHistory } from "react-router";

export const MovieListCard: React.FC<IMovie> = (movie) => {
    const history = useHistory()

    const handleChooseMovie = () => {
        history.push(`/info/${movie.id}`)
    }

    return (
        <div className='movie__card' onClick={handleChooseMovie}>        
            <img className='movie__card-image' alt={movie.title} src={'https://image.tmdb.org/t/p/original' + movie.poster_path} />
            <h3 className='movie__card-title'>{movie.title}({new Date(movie.release_date).getFullYear()})</h3>
        </div>
    )
}
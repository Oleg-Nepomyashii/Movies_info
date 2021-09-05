import { IMovie } from "../../store/reducers/movieReducers/movieInterfaces"

export const MovieListCard: React.FC<IMovie> = (movie) => {
    return (
        <div key={movie.title} style={{maxWidth: '250px', marginRight: '20px'}}>        
            <img style={{width: '250px' , height: '400px' , marginTop: 20, marginRight: 20}} alt={movie.title} src={'https://image.tmdb.org/t/p/original' + movie.poster_path} />
            <h3>{movie.title}({new Date(movie.release_date).getFullYear()})</h3>
            <p>{movie.overview}</p>
        </div>
    )
}
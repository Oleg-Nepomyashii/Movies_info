import { useEffect } from "react";
import { usedTypedSelectror } from "../../store/hooks/usedTypesSelectror";
import { useActions } from "../../store/hooks/useAction";
import { useParams } from "react-router";
import { Loader } from "../Loader/Loader";
import { MovieListCard } from "./MovieListCard";

interface typeMovie {
    movieType: string
}

export const MovieList = () => {
    const movies = usedTypedSelectror((state) => state.movies.movies)
    const isLoading = usedTypedSelectror((state) => state.movies.loading)
    const movieActions = useActions()
    const {movieType} = useParams<typeMovie>()

    useEffect(() => {
        movieActions.fetchMovies(movieType)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movieType])

    if(isLoading) {
        return <Loader />
    }

    if(movies.length === 0 ) {
        return (
            <div className='empty_movies'>
                <h1 className='empty_movies-title'>No movies</h1>
            </div>
        )
    }
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {
                movies.map(movie => (
                    <MovieListCard {...movie} key={movie.id}/>
                ))
            }
        </div>
    )
}
import { useEffect } from "react";
import { usedTypedSelectror } from "../../store/hooks/usedTypesSelectror";
import { useActions } from "../../store/hooks/useAction";
import { useParams } from "react-router";

interface typeMovie {
    movieType: string
}

export const MovieList = (props: any) => {
    
    const movies = usedTypedSelectror((state) => state.movies.movies)
    const movieActions = useActions()

    const {movieType} = useParams<typeMovie>()
    console.log(movieType)


    useEffect(() => {
        movieActions.fetchMovies(movieType)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movieType])

    if(movies.length === 0 ) {
        return (
            <h1>No movies</h1>
        )
    }
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {
                movies.map(m => (
                    <div key={m.title} style={{maxWidth: '250px', marginRight: '20px'}}>
                        <img style={{width: '250px' , height: '400px' , marginTop: 20, marginRight: 20}} alt={m.title} src={'https://image.tmdb.org/t/p/original' + m.poster_path} />
                        <h3>{m.title}({new Date(m.release_date).getFullYear()})</h3>
                    </div>
                ))
            }
        </div>
    )
}
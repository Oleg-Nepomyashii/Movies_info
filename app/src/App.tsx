import React, { useEffect } from 'react';
import { usedTypedSelectror } from './store/hooks/usedTypesSelectror';
import { useActions } from './store/hooks/useAction';

export const App = () => {
  const {movies} = usedTypedSelectror((state) => state.movies)
  const {fetchMovies} = useActions()

  useEffect(() => {
    fetchMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {
        movies.map(m => (
          <div key={m.title}>
            <img style={{width: '250px' , height: '400px' , marginTop: 20, marginRight: 20}} alt={m.title} src={'https://image.tmdb.org/t/p/original' + m.poster_path} />
          </div>
        ))
      }
    </div>
  );
}

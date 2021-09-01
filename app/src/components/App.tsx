import { BrowserRouter , Route } from 'react-router-dom';
import { MovieList } from './Movies/MoviesList';
import {Navigation} from './Navigation/Navigation'

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path='/' exact>
        <MovieList type='popular' />
      </Route>
      <Route path='/top_rated'>
        <MovieList type='top_rated' />
      </Route>
    </BrowserRouter>
  );
}
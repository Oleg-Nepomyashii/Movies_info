import { BrowserRouter , Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { MovieList } from './Movies/MoviesList';
import {Navigation} from './Navigation/Navigation';
import {MovieInfo} from './Movies/Movie/MovieInfo';

export const App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <main className='main_container'>
          <Navigation />
            <Route path='/movies/:movieType'>
              <MovieList />
            </Route>
            <Route path='/info/:movieId'>
              <MovieInfo />
            </Route>
        </main>
      </div>
    </BrowserRouter>
  
  );
}
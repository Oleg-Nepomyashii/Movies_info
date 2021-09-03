import { BrowserRouter , Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { MovieList } from './Movies/MoviesList';
import {Navigation} from './Navigation/Navigation'

export const App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <main className='main_container'>
          <Navigation />
            <Route path='/' exact>
              <MovieList type='popular' />
            </Route>
            <Route path='/top_rated'>
              <MovieList type='top_rated' />
            </Route>
        </main>
      </div>
    </BrowserRouter>
  
  );
}
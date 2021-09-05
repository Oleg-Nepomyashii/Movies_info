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
            <Route path='/:movieType'>
              <MovieList />
            </Route>
        </main>
      </div>
    </BrowserRouter>
  
  );
}
import { BrowserRouter , Route, Redirect } from 'react-router-dom';
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
            <Route path='/'>
              <Redirect to='/popular' />
            </Route>
            <Route path='/:movieType'>
              <MovieList />
            </Route>
            
        </main>
      </div>
    </BrowserRouter>
  
  );
}
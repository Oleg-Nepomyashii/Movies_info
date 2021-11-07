import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

export const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
            <img src={Logo} alt="imdb logo" className='header_logo' />
            </Link>
            <div className='header_links'>
                 <a href="https://www.imdb.com/" target='_blank' rel="noreferrer">Origin IMDB</a>
                 <a href="https://developers.themoviedb.org/3" target='_blank' rel="noreferrer">API IMDB</a>
            </div>
        </header>
    )
}
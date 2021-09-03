import {Link} from 'react-router-dom';

export const Navigation = () => (
    <div>
        <Link to='/'>
            Popular
        </Link>
        <Link to='/top_rated'>
            Top Rated
        </Link>
    </div>
)
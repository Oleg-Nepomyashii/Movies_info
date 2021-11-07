import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';

export const Navigation: React.FC = () => {
    const nav = [
        {name: 'Popular' , value: 'popular'},
        {name: 'Top Rated' , value: 'top_rated'},
        {name: 'Now Playing' , value: 'now_playing'},
        {name: 'Upcoming' , value: 'upcoming'},
    ]
    const movieType = useHistory()
    const [typeMovies , setTypeMovies] = useState<string>(
        movieType?.location?.pathname 
            ? movieType.location.pathname.slice(1) 
            : nav[0].value
    )

    const f = (newMovieType: string) => {
       setTypeMovies(newMovieType)
    }

    return (
        <div className='navigation'>
            <div className='navigation_category'>
                <h2 className='navigation_category-title'>Movies</h2>

                {
                    // eslint-disable-next-line array-callback-return
                    nav.map((n) => (
                        <Link 
                            key={n.value}
                            to={'/movies/' + n.value}
                            className={typeMovies === n.value ? 'active' : ''}
                            onClick={() => f(n.value)} 
                        >
                            {n.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
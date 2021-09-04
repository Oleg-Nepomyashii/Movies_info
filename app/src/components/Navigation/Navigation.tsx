import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router';

interface typeMovie {
    movieType: string
}

export const Navigation: React.FC = () => {

    const nav = [
        {name: 'Popular' , value: 'popular'},
        {name: 'Top Rated' , value: 'top_rated'},
        {name: 'Now Playing' , value: 'now_playing'},
        {name: 'Upcoming' , value: 'upcoming'},
    ]
    const {movieType} = useParams<typeMovie>()
    const [typeMovies , setTypeMovies] = useState<string>(movieType ? movieType : nav[0].value)

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
                            to={n.value}
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
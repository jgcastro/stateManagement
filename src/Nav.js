import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'


const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return(
        <nav>
            <h3>Juan Castro</h3>
            <p># of Movies I own: <strong>{movies.length}</strong></p>
        </nav>
    );
}

export default Nav;
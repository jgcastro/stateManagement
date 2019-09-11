import React, { useState, useContext } from 'react';
import {MovieContext} from './MovieContext'

const AddMovie = () => {
    const [movies, setMovies] = useContext(MovieContext);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const updateId = (e) => {
        setId(e.target.value);
    }

    const addMovie = (e) => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, { name: name, price: price, id: id }])
    };

    return(
        <form onSubmit={addMovie}>
            <input type="text" placeholder="Add Movie" name="name" value={name} onChange={updateName}></input>
            <input type="number" placeholder="Add Price"  name="price" value={price} onChange={updatePrice}></input>
            <input type="number" placeholder="Add Id"  name="id" value={id} onChange={updateId}></input>
            <button type="submit">Save</button>
        </form>
    );
}

export default AddMovie;
import {useState, useEffect}from 'react';
import './App.css'
import SearchIcon from './search.svg';
import { useState } from 'react';
import MovieCard from './MovieCard';

// dcbabb41
const API_URL= 'http://www.omdbapi.com?apikey=dcbabb41';
 const movie1= {
    "Title": "Stranded",
        "Year": "2013",
        "imdbID": "tt2268573",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxNDY0NDE3Ml5BMl5BanBnXkFtZTcwNjgzOTE4OQ@@._V1_SX300.jpg"

 }

const App= () => {
    const [movies, setMovies] = useState([]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
         const data = await response.json();
          setMovies(data.search);

    }

    useEffect(() => {
        searchMovies('stranded');

    }, []);
    
    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                placeholder='search for movies' 
                value='Abattoir'
                onChange={() => {}}
                />
                <img
                src={SearchIcon}
                alt='search' 
                onClick={() => {}}
                />
                {
                    movies?. length> 0
                    ?(
                        <div className='container'>
                       {movies.map((movie) => (
                        <MovieCard movie = {movie}/>
                       ))}
        
                    </div>  
                    ) :(
                        <div className='empty'>
                            <h2>No movie found</h2>

                        </div>
                    )
                }

            </div>
            
            

        </div>
    );
}

export default App;
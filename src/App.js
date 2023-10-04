import {useEffect}from 'react';
import './App.css'
import SearchIcon from './search.svg';

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
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
         const data = await response.json();
          console.log(data.search);

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

            </div>
            <div className='container'>
                <div className='movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                </div>

            </div>
            

        </div>
    );
}

export default App;
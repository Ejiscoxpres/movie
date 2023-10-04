import {useEffect}from 'react';
import './App.css'
import searchIcon from './search.svg';

// dcbabb41
const API_URL= 'http://www.omdbapi.com?apikey=dcbabb41';

const App= () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
         const data = await response.json();
          console.log(data.search);

    }

    useEffect(() => {
        searchMovies('spiderman');

    }, []);
    
    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                placeholder='search for movies' 
                value='superman'
                onChange={() => {}}
                />
                <img
                src={searchIcon}
                alt='search' 
                />

            </div>

        </div>
    );
}

export default App;
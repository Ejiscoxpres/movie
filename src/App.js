import {useEffect}from 'react';

// dcbabb41
const API_URL 'http://www.omdbapi.com?apikey=dcbabb41';

const App= () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);

    }

    useEffect(() => {

    }, []);
    return (
        <h1>Movie App</h1>
    );
}

export default App;
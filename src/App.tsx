import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

type Film = {
    title: String;
    episode_id: Number;
    opening_crawl: String;
    director: String;
    producer: String;
    release_date: String;
    characters: Array<String>;
    planets: Array<String>;
    starships: Array<String>;
    vehicles: Array<String>;
    species: Array<String>;
    created: String;
    edited: String;
    url: String;
};

function App() {
    const [movies, setMovies] = useState<Array<Film> | undefined>(undefined);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMoviesHandler = useCallback(async () => {
        setLoading(true);
        const data = await fetch("https://swapi.dev/api/films/")
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.error(`This error ocurred: ${error.message}`);
                setError("505 Error: something went wrong");
            });

        setMovies(data.results);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, []);

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {!isLoading && movies && movies.length > 0 && (
                    <MoviesList movies={movies} />
                )}
                {!isLoading && movies && movies.length == 0 && (
                    <p>No movies found</p>
                )}
                {isLoading && error == null && <p>Loading...</p>}
                {error != null && <p>{error}</p>}
            </section>
        </React.Fragment>
    );
}

export default App;

/*   */

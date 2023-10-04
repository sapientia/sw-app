import {useState} from 'react';

type Film = {
    title: String;
    episode_id?: Number;
    opening_crawl: String;
    director?: String;
    producer?: String;
    release_date: String;
    characters?: Array<String>;
    planets?: Array<String>;
    starships?: Array<String>;
    vehicles?: Array<String>;
    species?: Array<String>;
    created?: String;
    edited?: String;
    url?: String;
};

export const addMovieHandler = async (movie:Film) => {
const response = await fetch('https://sw-app-test-34193-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
    method:'POST',
    body: JSON.stringify(movie),
    headers: {
        'Content-Type': 'application/json'
    }
});
const data = await response.json
console.log(data);
}

/*
export const fetchRequest =  (requestConfig) => {

    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const sendRequest = async () => {
        setLoading(true);
        setError(null);
        try {

            const response = await fetch(requestConfig.url, {
                method:requestConfig.method,
                body: JSON.stringify(requestConfig.body),
                headers: requestConfig.headers
            });

        }
    }

    const data = await response.json
    console.log(data);
    }
    */
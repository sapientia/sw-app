import { MutableRefObject, useRef } from "react";
import { addMovieHandler } from "../utils/clientFirebase";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
    const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
    const openingTextRef = useRef() as MutableRefObject<HTMLInputElement>;
    const releaseDateRef = useRef() as MutableRefObject<HTMLInputElement>;

    function submitHandler(event) {
        event.preventDefault();

        // could add validation here...

        const movie = {
            title: titleRef.current.value,
            opening_crawl: openingTextRef.current.value,
            release_date: releaseDateRef.current.value,
        };

        addMovieHandler(movie);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="opening-text">Opening Text</label>
                <textarea
                    rows="5"
                    id="opening-text"
                    ref={openingTextRef}
                ></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor="date">Release Date</label>
                <input type="text" id="date" ref={releaseDateRef} />
            </div>
            <button type="submit">Add Movie</button>
        </form>
    );
}

export default AddMovie;

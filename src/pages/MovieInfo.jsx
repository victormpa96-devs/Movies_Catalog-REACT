import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components/loader";
import { get } from "../utils/API";
import styles from "./MovieInfo.module.css";

export function MovieInfo(){

    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        get("/movie/" + movieId)
            .then((data) => {
                setMovie(data);
                setLoading(false);                
            });
    }, [movieId]);

    if (loading){
        return <Loader />;
    }

    const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

    // console.log(movie);
    return <div className={styles.MovieInfo}>
        <img className={`${styles.col} ${styles.MovieImage}`} src={imageURL} alt={movie.title} />
        <div className={`${styles.col} ${styles.MovieInfoBox}`}>
            <p><strong>Title:</strong> {movie.title}</p>
            <p><strong>Overview:</strong> {movie.overview}</p>
            <p><strong>Release date:</strong> {movie.release_date}</p>
            <p><strong>Average score:</strong> {movie.vote_average}</p>   
        </div>
    </div>;
}
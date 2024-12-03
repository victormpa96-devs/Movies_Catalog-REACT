import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {

    const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;    

    return (
        <li className={styles.movieCard}>
            <div className={styles.title}>{movie.title}</div>
            <div className={styles.card}> 
                <Link to={"/movies/" + movie.id}>
                    
                    <img width={230} height={345} className={styles.movieImage} src={imageURL} alt={movie.title} />

                    <div className={styles.movieInfo}>
                        <div>
                            <div>Release date:</div>
                            <div>{movie.release_date}</div>
                        </div>
                        <div>Average Score: {movie.vote_average}</div>
                    </div>
                </Link>
            </div>
        </li>      

    );

}
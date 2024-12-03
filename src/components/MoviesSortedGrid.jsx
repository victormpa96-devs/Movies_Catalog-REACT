import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import {get} from "../utils/API"
import { Loader } from "./loader";
import { useHistory } from "react-router-dom";
import stylesSearch from "./search.module.css";

export function MoviesSortedGrid(){

    const [searchText, setSearchText] = useState("");
    const history = useHistory();    

    const [movies, setMovies] = useState([]); 
    const [Loading, setLoading] = useState(true);      

    useEffect(()=>{

        setLoading(true);

        get ("/discover/movie")
            .then((data) => {
                return data.results;
            })
            .then(movies => sortByScore(movies))
            .then((moviesSorted) => {
                setMovies(moviesSorted);
                setLoading(false);
            })
                
    }, []);

    function sortByScore(data){
                
        let moviesByScore = data.sort((a, b) => b.vote_average - a.vote_average);
        return moviesByScore;               
    }

    if (Loading){
        return <Loader />
    }

    const send = (event)=>{
        event.preventDefault();
        history.push("/?search=" + searchText);
    }

    return (        
    
    <React.Fragment>
        <div className={stylesSearch.container}>
            <form onSubmit={send}>
                <input 
                    className={stylesSearch.inputSearch}
                    type="text" 
                    placeholder="MOVIE NAME" 
                    value={searchText} 
                    onChange={(event) => setSearchText(event.target.value)} 
                />
                <button className={stylesSearch.sendSearch} type="submit">SEARCH</button>
            </form> 
        </div>
        
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => {
                return (
                    <MovieCard key={movie.id} movie={movie} />
                );
            })}
        </ul> 
    </React.Fragment>
    
    );
    

    
}
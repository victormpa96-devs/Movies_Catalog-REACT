import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import {get} from "../utils/API"
import { Loader } from "./loader";
import { useQuery } from "../hooks/useQuery";

export function MoviesGrid(){

    const [movies, setMovies] = useState([]); 
    const [Loading, setLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search");

    useEffect(()=>{

        setLoading(true);
        const searchURL = search 
            ? "/search/movie?query=" + search 
            : "/discover/movie";
        get (searchURL)
            .then((data) => {                
                setMovies(data.results);  
                setLoading(false);

            })            
                
    }, [search]);

    if (Loading){
        return <Loader />
    }

    return (        
    
        <React.Fragment>                      

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
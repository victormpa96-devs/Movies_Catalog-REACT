import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import styles from "./search.module.css";

export function Search() {     

    const [searchText, setSearchText] = useState("");
    const history = useHistory();    
    const pageSearch = history.location.search.includes("?search=");

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const send = (event)=>{
        event.preventDefault();
        history.push("/?search=" + searchText);
    }

    if(pageSearch){
        return (
            <div className={styles.container}>
                <form onSubmit={send}>
                    <input 
                        className={styles.inputSearch}
                        type="text" 
                        placeholder="MOVIE NAME" 
                        value={searchText} 
                        onChange={(event) => setSearchText(event.target.value)} 
                    />
                    <button className={styles.sendSearch} type="submit">SEARCH</button>
                </form> 
            </div>
        )
    }

    if(!pageSearch){
        return (
            <div className={styles.container}>
                <form onSubmit={send}>
                    <input 
                        className={styles.inputSearch}
                        type="text" 
                        placeholder="MOVIE NAME" 
                        value={searchText} 
                        onChange={(event) => setSearchText(event.target.value)} 
                    />
                    <button className={styles.sendSearch} type="submit">SEARCH</button>
                </form>
    
                <div className={styles.divBtn}>
                    <Link to="/sorted_by_score">
                        <button className={styles.buttonSort} id="sortByScore">SORT MOVIES BY AVERAGE SCORE</button>
                    </Link>
                </div>  
            </div>
        )
    }

    
}

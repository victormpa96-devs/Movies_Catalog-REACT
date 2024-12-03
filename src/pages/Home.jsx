import { Search } from "../components/search";
import { MoviesGrid } from "../components/MoviesGrid";

export function Home(){
    return (    
        <div>
            <Search />
            <MoviesGrid />
        </div>
    );
}
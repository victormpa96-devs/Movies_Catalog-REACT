import React from "react";
import styles from "./App.module.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { MovieInfo } from "./pages/MovieInfo";
import { MoviesSorted } from "./pages/MoviesSorted";
import { Home } from "./pages/Home";
import stylesError from "./pages/Error404.module.css";

export function App() {
    return (
        <Router>
            <header>
                <Link to="/">  
                    <h1 className={styles.title}>MOVIE CATALOG</h1>
                </Link>                
            </header>
            <main>
                <Switch>
                    <Route exact path="/movies/:movieId"><MovieInfo /></Route>
                    <Route exact path="/sorted_by_score"><MoviesSorted /></Route>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/">
                        <div className={stylesError.errorBgContainer}>
                        <div className={stylesError.errorBg}></div>
                        </div>
                    </Route>
                </Switch>
            </main>
        </Router>

    );
}
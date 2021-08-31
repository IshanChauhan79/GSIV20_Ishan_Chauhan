import React from "react";
import MovieCard from "../UI/SearchBox/MovieCard/MovieCard";
import classes from "./Movies.module.css";

function Movies() {
  return (
    <div className={classes.Movies}>
      <MovieCard />
    </div>
  );
}

export default Movies;

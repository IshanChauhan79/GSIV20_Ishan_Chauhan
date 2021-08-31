import React from "react";
import MovieCard from "../UI/MovieCard/MovieCard";
import classes from "./Movies.module.css";

const img = "https://image.tmdb.org/t/p/w500";
const data = {
  adult: false,
  backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
  genre_ids: [28, 12, 878],
  id: 299537,
  original_language: "en",
  original_title: "Captain Marvel",
  overview:
    "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
  popularity: 196.916,
  poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
  release_date: "2019-03-06",
  title: "Captain Marvel",
  video: false,
  vote_average: 6.9,
  vote_count: 11846,
};

function Movies() {
  return (
    <div className={classes.Movies}>
      <MovieCard
        img={img + data.poster_path}
        title={data.original_title}
        desc={data.overview}
        rate={data.vote_average}
      />
      <MovieCard
        img={img + data.poster_path}
        title={data.original_title}
        desc={data.overview}
        rate={data.vote_average}
      />

      <MovieCard
        img={img + data.poster_path}
        title={data.original_title}
        desc={data.overview}
        rate={data.vote_average}
      />
      <MovieCard
        img={img + data.poster_path}
        title={data.original_title}
        desc={data.overview}
        rate={data.vote_average}
      />
      <MovieCard
        img={img + data.poster_path}
        title={data.original_title}
        desc={data.overview}
        rate={data.vote_average}
      />
      <MovieCard
        img={img + data.poster_path}
        title={data.original_title}
        desc={data.overview}
        rate={data.vote_average}
      />
      <MovieCard
        img={img + data.poster_path}
        title={data.original_title}
        desc={data.overview}
        rate={data.vote_average}
      />
      <MovieCard
        img={img + data.poster_path}
        title={data.original_title}
        desc={data.overview}
        rate={data.vote_average}
      />
      <MovieCard
        img={img + data.poster_path}
        title={data.original_title}
        desc={data.overview}
        rate={data.vote_average}
      />
      <MovieCard
        img={img + data.poster_path}
        title={data.original_title}
        desc={data.overview}
        rate={data.vote_average}
      />
      <MovieCard
        img={img + data.poster_path}
        title={data.original_title}
        desc={data.overview}
        rate={data.vote_average}
      />
      <MovieCard
        img={img + data.poster_path}
        title={data.original_title}
        desc={data.overview}
        rate={data.vote_average}
      />
    </div>
  );
}

export default Movies;

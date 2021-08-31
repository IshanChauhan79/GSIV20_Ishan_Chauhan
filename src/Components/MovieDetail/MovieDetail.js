import React from "react";
import classes from "./MovieDetail.module.css";

const img = "https://image.tmdb.org/t/p/w500";
const data = {
  adult: false,
  backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
  belongs_to_collection: {
    id: 623911,
    name: "Captain Marvel Collection",
    poster_path: "/4diELSzXT1FbN782cOogEWeKN2w.jpg",
    backdrop_path: "/ubZUKycnQldt2umj0bPD2VwXDJM.jpg",
  },
  budget: 152000000,
  genres: [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 878, name: "Science Fiction" },
  ],
  homepage: "https://www.marvel.com/movies/captain-marvel",
  id: 299537,
  imdb_id: "tt4154664",
  original_language: "en",
  original_title: "Captain Marvel",
  overview:
    "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
  popularity: 196.916,
  poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
  production_companies: [
    {
      id: 420,
      logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
      name: "Marvel Studios",
      origin_country: "US",
    },
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" },
  ],
  release_date: "2019-03-06",
  revenue: 1128276090,
  runtime: 124,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
  ],
  status: "Released",
  tagline: "Higher. Further. Faster.",
  title: "Captain Marvel",
  video: false,
  vote_average: 6.9,
  vote_count: 11851,
};

function MovieDetail() {
  let hours = data.runtime / 60;
  let rhours = Math.floor(hours);
  let minutes = data.runtime % 60;
  let time = `${rhours}:${minutes > 9 ? minutes : "0" + minutes}`;
  return (
    <div className={classes.MovieDetail}>
      <div
        style={{ backgroundImage: `url(${img + data.poster_path})` }}
        className={classes.Img}
      >
        {" "}
      </div>
      <div className={classes.Details}>
        <div className={classes.TitleRow}>
          <div className={classes.Title}>{data.original_title}</div>
          &nbsp;&nbsp;&nbsp; (
          <div className={classes.Rating}>
            <img
              src="https://img.icons8.com/ios-glyphs/18/fbbc04/star--v1.png"
              alt=""
            />
            {data.vote_average}
          </div>
          )
        </div>
        <div
          className={classes.DateRow}
        >{`${data.release_date} | ${time} | ${data.production_companies[0].name}`}</div>
        <div className={classes.Desc}>{data.overview}</div>
        <div className={classes.View}>
          <a href={data.homepage} target="_blank">
            View
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

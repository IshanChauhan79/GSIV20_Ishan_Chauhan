import React from "react";
import classes from "./MovieCard.module.css";

function MovieCard(props) {
  return (
    <div className={classes.MovieCard}>
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className={classes.Img}
      ></div>
      {/* <img src={props.img} /> */}
      <div className={classes.Details}>
        <div className={classes.TitleRow}>
          <div className={classes.Title}>{props.title}</div>
          <div className={classes.Rating}>
            <img src="https://img.icons8.com/ios-glyphs/16/fbbc04/star--v1.png" alt="" /> 
            {props.rate}
          </div>
        </div>

        <div className={classes.Desc}>{props.desc.substring(0, 60)}...</div>
      </div>
    </div>
  );
}

export default MovieCard;

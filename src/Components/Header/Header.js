import React from "react";
import SearchBox from "../UI/SearchBox/SearchBox";
import classes from "./Header.module.css";
import { ReactComponent as Home } from "../../assests/images/home.svg";

function Header() {
  return (
    <div className={classes.Header}>
      {/* <SearchBox /> */}
      <div className={classes.MovieDetails}>Movie Details</div>
      <Home />
    </div>
  );
}

export default Header;

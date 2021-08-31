import React, { useState } from "react";
import classes from "./SearchBox.module.css";
import { ReactComponent as Search } from "../../../assests/images/search.svg";

function SearchBox() {
  const [search, setSearch] = useState("");
  const searchChanged = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <div className={classes.SearchBox}>
      <form>
        <button type="submit">
          <Search />
        </button>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={searchChanged}
          required
        />
      </form>
    </div>
  );
}

export default SearchBox;

import React from "react";

export default function HomeNav({
  setCreateModalClass,
  fetchBoardList,
  setFilterType,
}) {
  return (
    <nav className="home-nav">
      <form action="">
        <input type="text" className="search-bar" />
        <input type="submit" value="Submit" className="submit-button" />
        <button className="clear-button">Clear</button>
      </form>
      <div className="right-nav">
        <select
          name="filter"
          onChange={(e) => {
            setFilterType(e.target.value);
            fetchBoardList(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="recent">Recent</option>
          <option value="celebration">Celebration</option>
          <option value="thank-you">Thank You</option>
          <option value="inspiration">Inspiration</option>
        </select>
        <button
          className="add-button"
          onClick={() => setCreateModalClass("open")}
        >
          +
        </button>
      </div>
    </nav>
  );
}

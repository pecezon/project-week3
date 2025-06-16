import React from "react";

export default function HomeNav() {
  return (
    <nav className="home-nav">
      <form action="">
        <input type="text" className="search-bar" />
        <input type="submit" value="Submit" className="submit-button" />
        <button className="clear-button">Clear</button>
      </form>
      <div className="right-nav">
        <select name="" id="">
          <option value="">a</option>
          <option value="">a</option>
          <option value="">a</option>
          <option value="">a</option>
        </select>
        <button>+</button>
      </div>
    </nav>
  );
}

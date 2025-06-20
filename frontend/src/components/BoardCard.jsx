import React from "react";
import { Link } from "react-router-dom";

export default function BoardCard({
  id,
  title,
  category,
  fetchBoardList,
  filterType,
}) {
  const baseAPIURL = import.meta.env.VITE_API_URL || "http://localhost:5001";

  const deleteBoard = async (id) => {
    try {
      const response = await fetch(`${baseAPIURL}/boards/delete-board/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Error deleting the board: ${response.status}`);
      }
      await fetchBoardList(filterType);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="board-card">
      <img src="src/assets/barquita.png" alt="" />
      <div className="info-container">
        <h4>{title}</h4>
        <p>{category}</p>
      </div>
      <div className="button-container">
        <Link className="link" to={`/board-page/${id}`}>
          <button className="view-button">View Board</button>
        </Link>

        <button
          onClick={() => {
            deleteBoard(id);
          }}
          className="delete-button"
        >
          Delete Board
        </button>
      </div>
    </div>
  );
}

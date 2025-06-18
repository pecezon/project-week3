import React from "react";

export default function BoardCard({ title, category }) {
  return (
    <div className="board-card">
      <img src="src/assets/barquita.png" alt="" />
      <div className="info-container">
        <h4>{title}</h4>
        <p>{category}</p>
      </div>
      <div className="button-container">
        <button>View Board</button>
        <button>Delete Board</button>
      </div>
    </div>
  );
}

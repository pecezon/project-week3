import React from "react";

export default function BoardCard({ key, title, category }) {
  console.log("Card key: " + key);

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

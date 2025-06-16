import React from "react";

export default function BoardCard() {
  return (
    <div className="board-card">
      <img src="src/assets/barquita.png" alt="" />
      <div className="info-container">
        <h4>Hola</h4>
        <p>Soy homero chino</p>
      </div>
      <div className="button-container">
        <button>View Board</button>
        <button>Delete Board</button>
      </div>
    </div>
  );
}

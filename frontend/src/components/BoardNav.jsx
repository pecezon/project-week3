import React from "react";

export default function BoardNav({ boardName, setCreateKudoModalClass }) {
  return (
    <nav className="board-nav">
      <h1>{boardName}</h1>
      <button
        className="add-button"
        onClick={() => {
          setCreateKudoModalClass("open");
        }}
      >
        +
      </button>
    </nav>
  );
}

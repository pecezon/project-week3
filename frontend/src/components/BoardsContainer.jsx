import React from "react";
import BoardCard from "./BoardCard";

export default function BoardsContainer({ boardList }) {
  return (
    <section className="boards-container">
      {boardList.map((board) => (
        <BoardCard
          key={board.id}
          title={board.title}
          category={board.category}
        />
      ))}
    </section>
  );
}

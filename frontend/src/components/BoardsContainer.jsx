import React from "react";
import BoardCard from "./BoardCard";

export default function BoardsContainer({
  boardList,
  fetchBoardList,
  filterType,
}) {
  return (
    <section className="boards-container">
      {boardList.map((board, index) => (
        <BoardCard
          filterType={filterType}
          key={index}
          id={board.id}
          title={board.title}
          category={board.category}
          fetchBoardList={fetchBoardList}
        />
      ))}
    </section>
  );
}

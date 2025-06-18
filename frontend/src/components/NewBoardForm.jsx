import React, { useState } from "react";

export default function NewBoardForm({
  createModalClass,
  setCreateModalClass,
}) {
  const [boardName, setBoardName] = useState("");
  const [boardCategory, setBoardCategory] = useState("celebration");
  const [boardAuthor, setBoardAuthor] = useState("");

  return (
    <section className={"modal " + createModalClass}>
      <div className="modal-content">
        <div className="close-container">
          <i
            className="fa-solid fa-xmark"
            onClick={(e) => setCreateModalClass("closed")}
          ></i>
        </div>
        <h2>Create New Board</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCreateModalClass("closed");
            //TODO submit logic
          }}
        >
          <label>
            Board name
            <input
              type="text"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
            />
          </label>
          <label>
            Category Type
            <select
              name="category"
              value={boardCategory}
              onChange={(e) => setBoardCategory(e.target.value)}
            >
              <option value="celebration">Celebration</option>
              <option value="thank-you">Thank You</option>
              <option value="inspiration">Inspiration</option>
            </select>
          </label>
          <label>
            Board Author
            <input
              type="text"
              value={boardAuthor}
              onChange={(e) => setBoardAuthor(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}

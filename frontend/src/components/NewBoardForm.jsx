import React, { useState } from "react";

export default function NewBoardForm({
  createModalClass,
  setCreateModalClass,
  baseAPIURL,
  fetchBoardList,
  filterType,
}) {
  const [boardName, setBoardName] = useState("");
  const [boardCategory, setBoardCategory] = useState("celebration");
  const [boardAuthor, setBoardAuthor] = useState("");

  const createNewBoard = async () => {
    try {
      const newBoard = {
        title: boardName,
        category: boardCategory,
        author: boardAuthor,
      };

      const response = await fetch(baseAPIURL + "/boards/create-new-board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBoard),
      });

      if (!response.ok) {
        throw new Error(`Error creating the board: ${response.status}`);
      }

      const parsedResponse = await response.json();
    } catch (error) {
      window.alert("Something went wrong creating the board");
      console.error(error);
    }
  };

  return (
    <section className={"modal " + createModalClass}>
      <div className="modal-content">
        <div className="close-container">
          <i
            className="fa-solid fa-xmark"
            onClick={() => setCreateModalClass("closed")}
          ></i>
        </div>
        <h2>Create New Board</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await createNewBoard();
            await fetchBoardList(filterType);
            setCreateModalClass("closed");
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

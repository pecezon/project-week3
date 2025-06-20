import React, { useEffect, useState } from "react";

export default function CommentModal({
  kudoId,
  baseAPIURL,
  commentModalClass,
  setCommentModalClass,
}) {
  const [comments, setComments] = useState([]);
  const [newCommentMessage, setNewCommentMessage] = useState("");
  const [newCommentAuthor, setNewCommentAuthor] = useState("");

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `${baseAPIURL}/comments/get-comments-by-kudo-id/${kudoId}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error(`Error fetching the comment list: ${response.status}`);
      }
      const parsedResponse = await response.json();
      setComments(
        parsedResponse.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const createNewComment = async () => {
    try {
      const newComment = {
        message: newCommentMessage,
        author: newCommentAuthor,
        kudoId,
      };

      const response = await fetch(
        baseAPIURL + "/comments/create-new-comment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );

      if (!response.ok) {
        throw new Error(`Error creating the kudo: ${response.status}`);
      }

      const parsedResponse = await response.json();
    } catch (error) {
      window.alert("Something went wrong creating the kudo");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <section className={"modal " + commentModalClass}>
      <div className="modal-content">
        <div className="close-container">
          <i
            className="fa-solid fa-xmark"
            onClick={() => setCommentModalClass("closed")}
          ></i>
        </div>
        <div className="comments-container">
          {comments.map((c) => {
            return (
              <div className="comment">
                <h4>{c.message}</h4>
                <p>{c.author}</p>
              </div>
            );
          })}
        </div>
        <form
          className="commentForm"
          onSubmit={async (e) => {
            e.preventDefault();
            await createNewComment();
            await fetchComments();
          }}
        >
          <label>
            Comment Message
            <input
              type="text"
              value={newCommentMessage}
              onChange={(e) => setNewCommentMessage(e.target.value)}
            />
          </label>
          <label>
            Comment Author (Optional)
            <input
              type="text"
              value={newCommentAuthor}
              onChange={(e) => setNewCommentAuthor(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}

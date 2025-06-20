import { useState } from "react";
import CommentModal from "./CommentModal";

export default function KudoCard({ kudo, fetchKudos }) {
  const baseAPIURL = import.meta.env.VITE_API_URL || "http://localhost:5001";
  const [commentModalClass, setCommentModalClass] = useState("closed");
  const [pinned, setPinned] = useState(kudo.pinned);

  const deleteKudo = async () => {
    try {
      const response = await fetch(
        `${baseAPIURL}/kudos/delete-kudo/${kudo.id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`Error deleting the kudo: ${response.status}`);
      }
      await fetchKudos();
    } catch (error) {
      console.error(error);
    }
  };

  const upvoteKudo = async () => {
    try {
      const response = await fetch(
        `${baseAPIURL}/kudos/upvote-kudo/${kudo.id}`,
        {
          method: "PUT",
        }
      );
      if (!response.ok) {
        throw new Error(`Error upvoting the kudo: ${response.status}`);
      }
      await fetchKudos();
    } catch (error) {
      console.error(error);
    }
  };

  const pinKudo = async () => {
    try {
      const response = await fetch(`${baseAPIURL}/kudos/pin-kudo/${kudo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pinned: !pinned,
        }),
      });
      if (!response.ok) {
        throw new Error(`Error pinning the kudo: ${response.status}`);
      }
      await fetchKudos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="kudo-card">
      <div className="kudo-info">
        <h3>{kudo.title}</h3>
        <p>{kudo.description}</p>
      </div>
      <img className="kudo-gif" src={kudo.gifUrl} alt="" />
      <p className="kudo-owner">{kudo.owner}</p>
      <div className="kudo-buttons">
        <button
          onClick={() => {
            upvoteKudo();
          }}
          className="upvote-button"
        >
          Upvote: {kudo.upvotes}
        </button>
        <button
          className="delete-button"
          onClick={() => {
            deleteKudo();
          }}
        >
          Delete
        </button>
        <button
          className="comment-button"
          onClick={() => {
            setCommentModalClass("opened");
          }}
        >
          Comment
        </button>
        <div className="icon-container">
          <i
            className={
              "fa-regular fa-heart " + (kudo.pinned ? "pinned" : "not-pinned")
            }
            onClick={() => {
              setPinned(!pinned);
              pinKudo();
            }}
          ></i>
        </div>
      </div>
      <CommentModal
        kudoId={kudo.id}
        baseAPIURL={baseAPIURL}
        commentModalClass={commentModalClass}
        setCommentModalClass={setCommentModalClass}
      />
    </div>
  );
}

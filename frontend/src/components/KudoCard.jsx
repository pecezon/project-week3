import React from "react";

export default function KudoCard() {
  return (
    <div className="kudo-card">
      <div className="kudo-info">
        <h3>Card Title</h3>
        <p>Card Description</p>
      </div>
      <img src="src/assets/barca.jpg" alt="" />
      <p className="kudo-owner">Card Owner</p>
      <div className="kudo-buttons">
        <button>Upvote</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

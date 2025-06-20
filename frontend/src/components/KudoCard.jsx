import React from "react";
import { useEffect } from "react";

export default function KudoCard({ kudo }) {
  return (
    <div className="kudo-card">
      <div className="kudo-info">
        <h3>{kudo.title}</h3>
        <p>{kudo.description}</p>
      </div>
      <img src={kudo.gifUrl} alt="" />
      <p className="kudo-owner">{kudo.owner}</p>
      <div className="kudo-buttons">
        <button>Upvote: {kudo.upvotes}</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

import React from "react";

export default function KudoCard({ kudo, fetchKudos }) {
  const baseAPIURL = import.meta.env.VITE_API_URL || "http://localhost:5001";

  const deleteKudo = async (id) => {
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
        <button
          onClick={() => {
            deleteKudo();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

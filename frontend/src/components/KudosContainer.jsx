import React from "react";
import KudoCard from "./KudoCard";

export default function KudosContainer({ kudoList, fetchKudos }) {
  return (
    <section className="kudos-container">
      {kudoList.map((kudo, index) => {
        return <KudoCard key={index} kudo={kudo} fetchKudos={fetchKudos} />;
      })}
    </section>
  );
}

import React from "react";

function Trends({ twaats, place }) {
  return (
    <>
      <h6 className="card-subtitle  text-muted" style={{ marginBottom: "0rem", fontSize: "0.8rem" }}>
        Trending in {place}
      </h6>
      <h5 className="card-text" style={{ marginBottom: "0.3rem" }}>
        Trend word
      </h5>
      <h6 className="card-subtitle  text-muted" style={{ marginBottom: "2rem", fontSize: "0.8rem" }}>
        {twaats} Twaats
      </h6>
    </>
  );
}

export default Trends;

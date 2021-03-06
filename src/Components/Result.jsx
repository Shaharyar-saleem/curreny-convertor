import React from "react";

export default function Result(props) {
  return (
    props.result && props.amount && (
      <div className="mt-5 pt-5">
        <p style={{ color: "#fff", fontSize: "20px", lineHeight: "23px" }}>
          {props.amount} {props.from} =
        </p>
        <h2
          style={{
            color: "#fff",
            fontWeight: "700",
            lineHeight: "47px",
            fontSize: "40px",
          }}
        >
          {props.result.toFixed(2)} {props.to}
        </h2>
      </div>
    )
  );
}

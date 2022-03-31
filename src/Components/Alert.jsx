import React from "react";

export default function Alert(props) {
  const alertBox = {
    width: "24%",
    position: "absolute",
    right: "20px",
    bottom: "10px",
    paddingTop: "17px",
    paddingBottom: "17px",
  };

  const captalize = (word) => {
    const lower = word.toUpperCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1).toLowerCase();
  };

  return (
    props.alertBox && (
      <div
        className={`alert alert-${props.alertBox.type} alert-dismissible fade show mt-4 mobile-alert`}
        role="alert"
        style={alertBox}
      >
        <strong>{captalize(props.alertBox.type)}!</strong> {props.alertBox.msg}
      </div>
    )
  );
}

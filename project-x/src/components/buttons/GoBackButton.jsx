import React from "react";

export const GoBackButton = ({ title, action }) => {
  return (
    <button
      className="btn btn-block mt-2 col-12"
      style={{ backgroundColor: "#bdbdbd", color: "#474747" }}
      type="button"
      onClick={() => action()}
    >
      {title}
    </button>
  );
};

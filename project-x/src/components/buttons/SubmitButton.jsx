import React from "react";

export const SubmitButton = ({ title }) => {
  return (
    <button
      className="btn btn-block mt-2 col-12"
      style={{ backgroundColor: "#4B7F52", color: "#EAFFDA" }}
      type="submit"
    >
      {title}
    </button>
  );
};

//* React
import React from "react";
import * as Icon from "@phosphor-icons/react";

export const IndexSideButton = ({ title }) => {
  return (
    <div className="d-flex align-items-center justify-content-end">
      <button
        className="btn mb-3"
        style={{ backgroundColor: "#4B7F52", color: "#EAFFDA" }}
        type="button"
      >
        {title} <Icon.Plus />
      </button>
    </div>
  );
};

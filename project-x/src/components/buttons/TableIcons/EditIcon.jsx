import React from "react";
import { PencilSimple } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const EditIcon = ({ id }) => {
  return (
    <React.Fragment>
      <Link
        to={`${location.pathname}/edit/${id}`}
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <PencilSimple size={24} weight="light" />
      </Link>
    </React.Fragment>
  );
};

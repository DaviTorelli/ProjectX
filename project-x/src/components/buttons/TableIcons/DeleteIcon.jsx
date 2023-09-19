import { TrashSimple } from "@phosphor-icons/react";
import React from "react";

export const DeleteIcon = ({ id, deleteItem }) => {
  return (
    <React.Fragment>
      <span style={{ cursor: "pointer" }} onClick={() => deleteItem(id)}>
        <TrashSimple size={24} weight="light" />
      </span>
    </React.Fragment>
  );
};

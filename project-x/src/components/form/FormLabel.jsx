import React from "react";
import FormErrorMessage from "./FormErrorMessage";

export const FormLabel = ({ title, required = true }) => {
  return (
    <label
      htmlFor={title}
      style={{
        display: "block",
        marginBottom: "0.3rem",
        fontSize: "0.9rem",
        fontWeight: "bold",
        transition: "color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s",
      }}
    >
      {title} {required && <b className="text-danger">*</b>}
      {/* {!required && <b className="text-muted"> - opcional</b>} */}
    </label>
  );
};

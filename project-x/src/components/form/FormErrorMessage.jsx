import React from "react";

const FormErrorMessage = ({ error = " " }) => {
  return (
    <span
      className="d-inline"
      style={{
        fontSize: "0.8rem",
        color: "#FF4000",
      }}
    >
      {error}
    </span>
  );
};

export default FormErrorMessage;

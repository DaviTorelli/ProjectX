import React from "react";

export const IndexHeader = ({ title, description }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

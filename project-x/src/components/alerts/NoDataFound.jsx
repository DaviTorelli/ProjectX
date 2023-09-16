import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const NoDataFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="my-2">
      Nenhum dado encontrado.{" "}
      <span
        style={{ color: "#A09ABC", cursor: "pointer" }}
        onClick={() => navigate(`${location.pathname}/create`)}
      >
        Clique <strong>aqui</strong> para criar um registro.
      </span>
    </div>
  );
};

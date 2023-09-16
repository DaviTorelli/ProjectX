import React, { useEffect, useState } from "react";
import * as Icon from "@phosphor-icons/react";
import logo from "src/assets/images/pr-x-logo.png";
import { useLocation, useNavigate } from "react-router-dom";

export const PannelHeader = ({ shrunk, setShrunk }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [this_route, setThisRoute] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setThisRoute(true);
    } else {
      setThisRoute(false);
    }
  }, [location]);

  const handleShrunk = () => {
    setShrunk(!shrunk);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "0 1rem",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "2rem",
          display: "block",
          transition: "0.3s ease-in-out",
          cursor: "pointer",
          backgroundColor: this_route ? "rgba(71,127,82,0.2)" : "",
          borderRadius: "50%",
        }}
        onClick={() => navigate("/")}
      />
      <Icon.CaretDoubleLeft
        style={{
          color: "#EAFFDA",
          right: "1rem",
          top: "1rem",
          cursor: "pointer",
          backgroundColor: "transparent",
          borderRadius: "50%",
          transform: shrunk ? "scale(-1, 1)" : "scale(1, 1)",
          transition: "0.3s ease-in-out",
        }}
        onClick={handleShrunk}
      />
    </div>
  );
};

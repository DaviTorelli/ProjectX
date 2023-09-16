import React, { useEffect, useState } from "react";
import PannelItem from "./structure/PannelItem";
import { PannelHeader } from "./structure/PannelHeader";
import { PannelFooter } from "./structure/PannelFooter";
import * as Icon from "@phosphor-icons/react";

function Pannel() {
  const [shrunk, setShrunk] = useState(false);

  const iconStyle = { size: 16 };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShrunk(true);
      } else {
        setShrunk(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: shrunk ? "7.2rem" : "22rem",
        backgroundColor: "#373737",
        borderRight: "1px solid #373737",
        paddingTop: "1rem",
        transition: "0.3s ease-in-out",
      }}
    >
      <PannelHeader shrunk={shrunk} setShrunk={setShrunk} />
      <hr
        style={{
          width: "100%",
          border: "1px solid #71B340",
          margin: 0,
          marginTop: "1rem",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem 0",
          width: "100%",
          gap: "0.4rem",
          height: "100%",
          overflowY: "auto",
        }}
      >
        <PannelItem
          icon={<Icon.Hash {...iconStyle} />}
          title="Organização"
          {...{ shrunk }}
        >
          <PannelItem
            icon={<Icon.Confetti {...iconStyle} />}
            title="Eventos"
            href="/parties"
            {...{ shrunk }}
          />
          <PannelItem
            icon={<Icon.Users {...iconStyle} />}
            title="Convidados"
            href="/guests"
            {...{ shrunk }}
          />
          <PannelItem
            icon={<Icon.MapPin {...iconStyle} />}
            title="Locais"
            href="/places"
            {...{ shrunk }}
          />
        </PannelItem>
      </div>
      <hr
        style={{
          width: "100%",
          border: "1px solid #71B340",
          margin: 0,
          marginTop: "1rem",
        }}
      />
      <PannelFooter {...{ shrunk }} />
    </div>
  );
}

export default Pannel;

import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react";

export const PannelFooter = () => {
  const iconStyle = {
    size: 20,
    className: "mx-3",
    cursor: "pointer",
    color: "#EAFFDA",
  };

  const icons = [
    {
      icon: <Icon.LinkedinLogo {...iconStyle} />,
      link: "https://www.linkedin.com/in/davitorelli/",
    },
    {
      icon: <Icon.GithubLogo {...iconStyle} />,
      link: "https://github.com/DaviTorelli",
    },
  ];

  return (
    <footer
      style={{
        height: "3rem",
      }}
      className="w-100 d-flex align-items-center justify-content-center"
    >
      {icons.map((item) => (
        <a href={item.link} target="_blank">
          {item.icon}
        </a>
      ))}
    </footer>
  );
};

//* React
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//* Assets
import style from "../style.module.css";
import { Balloon, CaretDown } from "@phosphor-icons/react";

/**
 * @param {Object} props
 * @param {React.Component} props.icon
 * @param {String} props.title
 * @param {String} props.href
 * @param {React.Component} props.children
 * @returns
 * @example
 *
 * - single item:
 * <PannelItem
 *   icon={'balloon'}
 *   title="Dashboard"
 *   href="/pbo/dashboard"
 *   {...{ shrunk }}
 * />
 *
 * - item with collapse:
 * <PannelItem
 *   icon={'balloon'}
 *   title="Páginas"
 *   {...{ shrunk }}
 * >
 *  <PannelItem
 *    icon={'balloon'}
 *    title="Política de Privacidade"
 *    href="/pbo/pages/privacy"
 *    {...{ shrunk }}
 *  />
 *  <PannelItem
 *    icon={'balloon'}
 *    title="Termos de Uso"
 *    href="/pbo/pages/terms"
 *    {...{ shrunk }}
 *  />
 * </PannelItem>
 **/
const PannelItem = ({ icon, title, children = null, href, shrunk }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const ref = useRef(null);

  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [this_route, setThisRoute] = useState(false);

  useEffect(() => {
    // get collapse height
    setHeight(ref?.current?.scrollHeight);
  }, []);

  useEffect(() => {
    // check if this route is active to set background color
    if (location.pathname === href) {
      setThisRoute(true);
    } else {
      setThisRoute(false);
    }
  }, [location]);

  const handleOpenCollapse = () => {
    setOpen(!open);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "0 1rem",
      }}
    >
      <div
        className={style.asideItem}
        style={{
          backgroundColor: !open ? "#2d2d2d" : "#464646",
          borderRadius: open ? "0.5rem 0.5rem 0 0" : "0.5rem",
          ...(this_route && { backgroundColor: "#4B7F52" }),
        }}
        onClick={
          children
            ? handleOpenCollapse
            : () => {
                navigate(href);
              }
        }
      >
        {icon}
        <span
          style={{
            fontSize: shrunk ? "0" : "1rem",
            marginLeft: "0.6rem",
            transition: "0.3s ease-in-out",
            color: "#EAFFDA",
          }}
        >
          {title}
        </span>
        {children && (
          <CaretDown
            style={{
              marginLeft: "auto",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s ease-in-out",
              color: "#EAFFDA",
            }}
          />
        )}
      </div>

      {children && (
        <div
          ref={ref}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxHeight: open ? height + 16 : 0,
            overflow: "hidden",
            transition: "0.3s ease-in-out",
            opacity: open ? 1 : 0,
            backgroundColor: open ? "#464646" : "transparent",
            borderRadius: "0 0 0.5rem 0.5rem",
            paddingBottom: open ? "1rem" : 0,
            gap: "0.4rem",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default PannelItem;

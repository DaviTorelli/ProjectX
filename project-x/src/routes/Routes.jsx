import React from "react";
import { Route, Routes } from "react-router-dom";
import Pannel from "src/components/pannel/Pannel";
import CreateGuest from "src/pages/Event/Guest/CreateGuest";
import GuestsIndex from "src/pages/Event/Guest/GuestsIndex";
import PartiesIndex from "src/pages/Event/Party/PartiesIndex";
import CreatePlace from "src/pages/Event/Place/CreatePlace";
import PlacesIndex from "src/pages/Event/Place/PlacesIndex";
import Home from "src/pages/Home";

export const MainRoutes = () => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          backgroundColor: "#333333",
          color: "#EAFFDA",
        }}
      >
        <Pannel />
        <div
          className="mx-3"
          style={{
            width: "100%",
            paddingTop: "7.5vh",
            height: "100vh",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <div
            className="mx-3"
            style={{
              borderRadius: "30px",
              paddingTop: "0.8rem",
              paddingBottom: "1.2rem",
              backgroundColor: "#464646",
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          >
            <section className="mx-5">
              <Routes>
                <Route path="/parties" element={<PartiesIndex />} />
                <Route path="/guests" element={<GuestsIndex />} />
                <Route path="/guests/create" element={<CreateGuest />} />

                <Route path="/places" element={<PlacesIndex />} />
                <Route path="/places/create" element={<CreatePlace />} />

                <Route path="/*" element={<Home />} />
              </Routes>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

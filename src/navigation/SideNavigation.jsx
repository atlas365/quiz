import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import "./SideNavigation.css";

const SideNavigation = () => {
  const [open, setOpen] = useState(false);

  const sideNavClass = `side-nav-drawer ${open ? "open" : ""}`;

  const onOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <div className="side-nav-bar">
        <IoMenu onClick={onOpen} color="white" size="32px" />
      </div>
      <div className={sideNavClass}>
        <div className="row-right">
          <IoClose onClick={() => setOpen(false)} color="white" size="32px" />
        </div>
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/flash-cards">Flash Cards</Link>
          <Link to="/design-elements">Design Elements</Link>
        </div>
      </div>
    </>
  );
};

export default SideNavigation;

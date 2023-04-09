import React from "react";
import TopBanner from "./TopBanner/TopBanner";
import Topbar from "./TopBar/TopBar";

function Header() {
  return (
    <div className="surface-section">
      <TopBanner />
      <Topbar />
    </div>
  );
}

export default Header;

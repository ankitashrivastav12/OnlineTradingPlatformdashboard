import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      {/* LEFT: MARKET INDICES */}
      <div className="indices-container">
        {/* NIFTY */}
        <div className="index-card">
          <span className="index-name">NIFTY 50</span>
          <span className="index-value down">100.20</span>
          <span className="index-change down">-0.32%</span>
        </div>

        {/* SENSEX */}
        <div className="index-card">
          <span className="index-name">SENSEX</span>
          <span className="index-value up">100.20</span>
          <span className="index-change up">+0.18%</span>
        </div>
      </div>

      {/* RIGHT: MENU */}
      <Menu />
    </div>
  );
};

export default TopBar;

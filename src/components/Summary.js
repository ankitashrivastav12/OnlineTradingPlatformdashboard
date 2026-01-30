import React from "react";

const Summary = () => {
  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      {/* EQUITY SECTION */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="summary-data">
          <div className="summary-left">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>

          <div className="summary-right">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      {/* HOLDINGS SECTION */}
      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="summary-data">
          <div className="summary-left">
            <h3 className="profit">
              1.55k <small>+5.20%</small>
            </h3>
            <p>P&amp;L</p>
          </div>

          <div className="summary-right">
            <p>
              Current value <span>31.43k</span>
            </p>
            <p>
              Investment <span>29.88k</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;

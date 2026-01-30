import React from "react";

const Funds = () => {
  return (
    <div className="row">
      <div className="col">
        <span>
          <p>Equity</p>
        </span>

        {/* Funds table */}
        <div className="funds-table">
          <FundRow label="Available margin" value="4,043.10" highlight />
          <FundRow label="Used margin" value="3,757.30" />
          <FundRow label="Available cash" value="4,043.10" />

          <hr />

          <FundRow label="Opening balance" value="4,043.10" />
          <FundRow label="Live balance" value="3,736.40" />
          <FundRow label="Payin" value="4,064.00" />
          <FundRow label="SPAN" value="0.00" />
          <FundRow label="Delivery margin" value="0.00" />
          <FundRow label="Exposure" value="0.00" />
          <FundRow label="Options premium" value="0.00" />

          <hr />

          <FundRow label="Collateral (Liquid funds)" value="0.00" />
          <FundRow label="Collateral (Equity)" value="0.00" />
          <FundRow label="Total collateral" value="0.00" />
        </div>
      </div>
    </div>
  );
};

/* ---------------------------------------------
   Reusable row component
---------------------------------------------- */
const FundRow = ({ label, value, highlight }) => {
  return (
    <div className="data">
      <p>{label}</p>
      <p className={`imp ${highlight ? "colored" : ""}`}>
        ₹ {value}
      </p>
    </div>
  );
};

export default Funds;

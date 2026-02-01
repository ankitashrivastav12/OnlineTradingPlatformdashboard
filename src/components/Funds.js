import React from "react";

const Funds = () => {
  return (
    <div style={{ padding: "16px", background: "#fff", borderRadius: "8px" }}>
      <h6 style={{ fontSize: "13px", fontWeight: 600, marginBottom: "10px" }}>
        Equity
      </h6>

      <FundRow label="Available margin" value="4,043.10" highlight />
      <FundRow label="Used margin" value="3,757.30" />
      <FundRow label="Available cash" value="4,043.10" />

      <Divider />

      <FundRow label="Opening balance" value="4,043.10" />
      <FundRow label="Live balance" value="3,736.40" />
      <FundRow label="Payin" value="4,064.00" />
      <FundRow label="SPAN" value="0.00" />
      <FundRow label="Delivery margin" value="0.00" />
      <FundRow label="Exposure" value="0.00" />
      <FundRow label="Options premium" value="0.00" />

      <Divider />

      <FundRow label="Collateral (Liquid funds)" value="0.00" />
      <FundRow label="Collateral (Equity)" value="0.00" />
      <FundRow label="Total collateral" value="0.00" />
    </div>
  );
};

const Divider = () => (
  <div style={{ height: "1px", background: "#eee", margin: "10px 0" }} />
);

const FundRow = ({ label, value, highlight }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        fontSize: "13px",
        borderBottom: "1px solid #f1f1f1"
      }}
    >
      <span style={{ color: "#777", fontWeight: 500 }}>{label}</span>
      <span
        style={{
          fontWeight: 600,
          color: highlight ? "#387ed1" : "#222"
        }}
      >
        ₹ {value}
      </span>
    </div>
  );
};

export default Funds;

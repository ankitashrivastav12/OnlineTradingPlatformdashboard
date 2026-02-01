

import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/holdings`)
    .then((res) => {
      setAllHoldings(res.data || []);
    })
    .catch((err) => {
      console.error("Holdings API error:", err);
    });
}, []);


  /* ================= GRAPH DATA ================= */
  const data = {
    labels: allHoldings.map((stock) => stock.name),
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price ?? 0),
        backgroundColor: "rgba(65, 132, 243, 0.6)",
      },
    ],
  };

  return (
    <>
      {/* ================= HOLDINGS TABLE ================= */}
      <div className="holdings-container">
        <h3 className="title">Holdings ({allHoldings.length})</h3>

        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&amp;L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
              </tr>
            </thead>

            <tbody>
              {allHoldings.map((stock) => {
                const qty = stock.qty ?? 0;
                const avg = stock.avg ?? 0;
                const price = stock.price ?? 0;

                const curValue = price * qty;
                const pnl = curValue - avg * qty;

                const pnlClass = pnl >= 0 ? "profit" : "loss";
                const dayClass = stock.day?.startsWith("-")
                  ? "loss"
                  : "profit";

                return (
                  <tr key={stock._id}>
                  <td data-label="Instrument">{stock.name}</td>
                  <td data-label="Qty">{qty}</td>
                  <td data-label="Avg cost">{avg.toFixed(2)}</td>
                  <td data-label="LTP">{price.toFixed(2)}</td>
                  <td data-label="Cur. val">{curValue.toFixed(2)}</td>
                  <td data-label="P&L" className={pnlClass}>
                    {pnl.toFixed(2)}
                  </td>
                  <td data-label="Net chg." className={pnlClass}>
                    {stock.net}
                  </td>
                  <td data-label="Day chg." className={dayClass}>
                    {stock.day}
                  </td>
                </tr>

                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= GRAPH ================= */}
      <div className="holdings-container">
        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;

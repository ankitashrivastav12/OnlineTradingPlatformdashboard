import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="positions-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;
              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td data-label="Product">{stock.product}</td>
                  <td data-label="Instrument">{stock.name}</td>
                  <td data-label="Qty">{stock.qty}</td>
                  <td data-label="Avg">{stock.avg.toFixed(2)}</td>
                  <td data-label="LTP">{stock.price.toFixed(2)}</td>
                  <td data-label="P&L" className={profClass}>
                    {pnl.toFixed(2)}
                  </td>
                  <td data-label="Chg" className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;

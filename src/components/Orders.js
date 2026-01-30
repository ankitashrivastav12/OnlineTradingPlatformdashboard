import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  // ✅ SELL = delete specific order
  const handleSell = (id) => {
    const updatedOrders = orders.filter(
      (order) => order.id !== id
    );

    setOrders(updatedOrders);
    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );
  };

  // EMPTY STATE
  if (orders.length === 0) {
    return (
      <div className="orders-page">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h3>Your Orders</h3>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Type</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.stock}</td>
              <td>{order.type}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>
                <button
                  className="sell-btn"
                  onClick={() => handleSell(order.id)}
                >
                  Sell
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

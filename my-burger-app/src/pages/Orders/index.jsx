import { useState, useEffect } from "react";

import { Loader } from "../../components";
import { getOrders } from "../../api";

import "./orders.css";

const Orders = () => {
  const [yourOrders, setYourOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await getOrders();
        setYourOrders(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="orders-wrapper">
            {yourOrders.map((el, index) => (
              <div key={el._id}>

                <ul className="yourOrders-list">
                  <li className="order-number">Order - {++index}</li>
                  <li className="yourOrders-item">
                    <span className="red-order-item">Name:</span> {el.orderName}
                  </li>
                  <li className="yourOrders-item">
                    <span className="red-order-item">Address:</span>
                    {el.orderAddress}
                  </li>
                  <li className="yourOrders-item">
                    <span className="red-order-item">Phone number:</span>
                    {el.orderPhone}
                  </li>
                  <li className="yourOrders-item">
                    <span className="red-order-item">Total price:</span>
                    {el.orderPrice}
                  </li>
                  {el.orderFast ? (
                    <li className="yourOrders-item">
                      <span className="red-order-item">Fast mode</span>
                    </li>
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default Orders;

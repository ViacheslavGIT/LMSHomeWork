import { useState, useEffect } from 'react';

import { Loader } from '../../components';
import { getOrders } from '../../api';

import './orders.css';

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
    <div className='orders-wrapper'>
      {loading ? (
        <Loader />
      ) : (
        <>
          {yourOrders.map((el, index) => (
            <div key={el._id}>
              <ul className='yourOrders-list'>
                <li className='yourOrders-item num-order'>Order - {++index}</li>
                <li className='yourOrders-item'>Name :{el.orderName}</li>
                <li className='yourOrders-item'>Address :{el.orderAddress}</li>
                <li className='yourOrders-item'>Phone number :{el.orderPhone}</li>
                <li className='yourOrders-item'>Total price :{el.orderPrice}</li>
                <li className='yourOrders-item'>Fast mode :{el.orderFast}</li>
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default Orders;

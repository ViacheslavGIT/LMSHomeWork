import { useState, useEffect } from 'react';

import Prices from './prices';
import Burger from './burger';
import Controls from './controls';

const mockData = [
  {
    product: 'Bacon',
    price: 0.75,
    id: 1,
  },
  {
    product: 'Cheese',
    price: 1.9,
    id: 2,
  },
  {
    product: 'Salad',
    price: 1.75,
    id: 3,
  },
  {
    product: 'Pickle',
    price: 1,
    id: 4,
  },
  {
    product: 'Meat',
    price: 2,
    id: 5,
  },
];

const ContentPage = () => {
  const [prices, setPrices] = useState([]);
  const [totalPrice, setTotalPrice] = useState('1.00');
  const [ifIngredients, setIfIngredients] = useState(false);

  useEffect(() => {
    setPrices(mockData);
  }, []);

  return (
    <div id='content-wrapper'>
      <Prices prices={prices} />
      <Burger price={totalPrice} ifIngredients={ifIngredients} />
      <Controls />
    </div>
  );
};
export default ContentPage;

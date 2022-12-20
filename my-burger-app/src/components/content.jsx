import { useState, useEffect } from 'react';

import { Prices, Burger, Controls } from './index';

const mockData = [
  {
    name: 'Tomato',
    price: 0.75,
    counter: 0,
    id: 1,
  },
  {
    name: 'Cheese',
    price: 1.9,
    counter: 0,
    id: 2,
  },
  {
    name: 'Salad',
    price: 1.75,
    counter: 0,
    id: 3,
  },
  {
    name: 'Pickle',
    price: 1,
    counter: 0,
    id: 4,
  },
  {
    name: 'Meat',
    price: 2,
    counter: 0,
    id: 5,
  },
  {
    name: 'Onion',
    price: 2,
    counter: 0,
    id: 6,
  },
];

const ContentPage = () => {
  const [prices, setPrices] = useState([]);
  const [ingredients, setIngredients] = useState(mockData);
  const [burgerState, setBurgerState] = useState([]);

  useEffect(() => {
    setPrices(mockData);
    setIngredients(mockData);
  }, []);

  return (
    <div id='content-wrapper'>
      <Prices prices={prices} />
      <Burger ingredients={ingredients} burgerState={burgerState} />
      <Controls
        controlsData={ingredients}
        setIngredients={setIngredients}
        burgerState={burgerState}
        setBurgerState={setBurgerState}
      />
    </div>
  );
};
export default ContentPage;

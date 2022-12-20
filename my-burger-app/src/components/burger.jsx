import { useState, useEffect } from 'react';

import up from '../assets/up.png';
import under from '../assets/under.png';
import tomato from '../assets/tomato.png';
import salad from '../assets/salad.png';
import cheese from '../assets/cheese.png';
import meat from '../assets/meat.png';
import onion from '../assets/onion.png';
import pickle from '../assets/pickle.png';

const Burger = ({ ingredients, burgerState }) => {
  const [ifIngredients, setIfIngredients] = useState(false);
  const [totalPrice, setTotalPrise] = useState(1);

  useEffect(() => {
    const isIngredient = ingredients.find((el) => el.counter > 0);
    if (isIngredient) {
      setIfIngredients(true);
    } else {
      setIfIngredients(false);
    }
  }, [ingredients]);

  useEffect(() => {
    let sum = ingredients.reduce(function (total, amount) {
      if (amount.counter > 0) {
        return total + amount.counter * amount.price;
      }
      return total;
    }, 1);
    setTotalPrise(sum.toFixed(2));
  
    return () => setTotalPrise(1);
  
  }, [ingredients]);

  const renderIngredients = () => {
    return burgerState?.map((el) => {
      let ingredientImg = '';
      switch (el) {
        case 'Tomato':
          ingredientImg = tomato;
          break;
        case 'Cheese':
          ingredientImg = cheese;
          break;
        case 'Salad':
          ingredientImg = salad;
          break;
        case 'Meat':
          ingredientImg = meat;
          break;
        case 'Onion':
          ingredientImg = onion;
          break;
        case 'Pickle':
          ingredientImg = pickle;
          break;
        default:
          break;
      }
      return <img key={Math.random() + el} src={ingredientImg} alt={el} />;
    });
  };

  return (
    <div id='burger'>
      <span>Burger price: {totalPrice} $</span>
      <div className='burger-view'>
        <span>
          <img src={up} alt='up' />
        </span>
        <div className='ingredients-container'>
          {ifIngredients ? renderIngredients() : <div>Please start by adding products...</div>}
        </div>
        <span>
          <img src={under} alt='under' />
        </span>
      </div>
    </div>
  );
};
export default Burger;

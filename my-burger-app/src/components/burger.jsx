import { useState, useEffect } from 'react';

import up from '../assets/up.png';
import under from '../assets/under.png';
import tomato from '../assets/tomato.png';
import salad from '../assets/salad.png';
import cheese from '../assets/cheese.png';
import meat from '../assets/meat.png';
import onion from '../assets/onion.png';
import pickle from '../assets/pickle.png';

const Burger = ({ ingredients, burgerState, active, setActive }) => {
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
        case 'tomato':
          ingredientImg = tomato;
          break;
        case 'cheese':
          ingredientImg = cheese;
          break;
        case 'salad':
          ingredientImg = salad;
          break;
        case 'meat':
          ingredientImg = meat;
          break;
        case 'onion':
          ingredientImg = onion;
          break;
        case 'pickle':
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
      <button className='button-54' onClick={() => setActive(!active)}>
        CHECKOUT
      </button>
    </div>
  );
};
export default Burger;

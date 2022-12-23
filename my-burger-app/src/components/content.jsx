import { useState, useEffect } from 'react';
import axios from 'axios';

import { Prices, Burger, Controls, Modal } from './index';

const ContentPage = () => {
  const [prices, setPrices] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [burgerState, setBurgerState] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await axios.get('https://burger-api-xcwp.onrender.com/ingredients');
        const updatedData = response.data.map((el) => ({ ...el, counter: 0 }));
        setPrices(updatedData);
        setIngredients(updatedData);
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
    <div id='content-wrapper'>
      <Prices prices={prices} loading={loading} />
      <Burger
        ingredients={ingredients}
        burgerState={burgerState}
        active={modalActive}
        setActive={setModalActive}
      />
      <Controls
        controlsData={ingredients}
        setIngredients={setIngredients}
        burgerState={burgerState}
        setBurgerState={setBurgerState}
        loading={loading}
      />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};
export default ContentPage;

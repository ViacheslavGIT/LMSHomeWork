import minus from '../assets/minus_circle.svg';
import plus from '../assets/plus_circle.svg';

const Controls = ({ controlsData, setIngredients, burgerState, setBurgerState }) => {
  const handleCounter = (control, name) => {
    if (!control) return;

    const newData = controlsData.map((el) => {
      if (el.name === name) {
        if (control === 'plus' && el.counter < 5 && burgerState.length < 10) {
          return { ...el, counter: el.counter + 1 };
        } else if (control === 'minus' && el.counter > 0) {
          return { ...el, counter: el.counter - 1 };
        }
      }
      return el;
    });

    const updateBurgerState = () => {
      let copiedData = burgerState;
      const currentIngredient = newData.find((el) => el.name === name);
      // TODO 
      if (control === 'plus' && currentIngredient.counter < 6 && burgerState.length < 10) {
        copiedData.unshift(name);
      } else if (control === 'minus') {
        const index = copiedData.indexOf(name);
        if (index > -1) {
          copiedData.splice(index, 1);
        }
      }
      return copiedData;
    };

    setBurgerState(updateBurgerState());
    setIngredients(newData);
  };

  return (
    <div id='controls'>
      <span className='controls-header'>ingredients</span>
      <div className='controls-list'>
        {controlsData.map((controls) => (
          <div
            key={controls.id}
            className='controls-item'
            onClick={(e) => handleCounter(e.target.alt, controls.name)}
          >
            <div className='counter-wrapper'>
              <img className='counter-btn' src={minus} alt='minus' />
              <span className='counter'>{controls.counter}</span>
              <img className='counter-btn' src={plus} alt='plus' />
            </div>
            <div className='counter-name'>
              <span>{controls.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Controls;

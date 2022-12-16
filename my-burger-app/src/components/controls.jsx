import { useState } from 'react';

import minus from '../assets/minus_circle.svg';
import plus from '../assets/plus_circle.svg';

const mockData = [
  {
    name: 'Bacon',
    counter: 0,
    id: 1,
  },
  {
    name: 'Cheese',
    counter: 0,
    id: 2,
  },
  {
    name: 'Salad',
    counter: 0,
    id: 3,
  },
  {
    name: 'Pickle',
    counter: 0,
    id: 4,
  },
  {
    name: 'Meat',
    counter: 0,
    id: 5,
  },
];

const Controls = () => {
  const [data, setData] = useState(mockData);

  const handleCounter = (control, name) => {
    const updatedElement = data.find((el) => el.name === name);

    if (control === '+') {
      console.log(updatedElement);
      let newData = [...data];
      updatedElement.counter = updatedElement.counter + 1;
      setData([...newData, { ...updatedElement, counter: updatedElement.counter + 1 }]);
    } else {
      console.log(control, name);
    }
  };

  return (
    <div id='controls'>
      <span className="controls-header">ingredients</span>
      <div className='controls-list'>
        {data.map((controls) => (
          <div
            key={controls.id}
            className='controls-item'
            onClick={(e) => handleCounter(e.target.outerText, controls.name)}
          >
            <div className='counter-wrapper'>
                <img className='counter-btn' src={plus} alt='plus' />
              <span className='counter'>{controls.counter}</span>
                <img className='counter-btn' src={minus} alt='minus' />
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

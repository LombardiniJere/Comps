
import Buttons from "../Buttons/Buttons";
import Panel from '../Panel';
import { useState } from 'react';

function CounterPage ({ initialCount }) {
  const [ count, setCount ] = useState(initialCount);
  const [ valueToAdd, setValueToAdd ] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setValueToAdd(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setCount(count + valueToAdd );
    setValueToAdd(0);
  }

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count: {count}</h1>
      <div className='flex flex-row gap-2 pl-2'>
        <Buttons className='px-8' onClick={ increment }>
          +
        </Buttons>
        <Buttons className='px-8' onClick={ decrement }>
          -
        </Buttons>
      </div>

    <form onSubmit={handleSubmit}>
      <label>Add amount:</label>
      <input
        value={valueToAdd || ""}
        onChange={handleChange}
        type='number'
        className='p-1 m-3 bg-gray-50 border border-gray-300'
      />
      <Buttons className='px-8'>Add !</Buttons>
    </form>
    </Panel>
  )
};

export default CounterPage;
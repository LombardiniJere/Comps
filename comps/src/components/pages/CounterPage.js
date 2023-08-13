
import Buttons from "../Buttons/Buttons";
import Panel from '../Panel';
import { useReducer } from 'react';

const INCREMENT_COUNT = 'increment-count';
const DICREMENT_COUNT = 'dicrement-count';
const SET_VALUE_TO_ADD = 'change-value-to-add';

const reducer = (state, action) => {
  if (action.type === INCREMENT_COUNT) {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === DICREMENT_COUNT) {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  
  if (action.type === SET_VALUE_TO_ADD) {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }

  return state;
};


function CounterPage ({ initialCount }) {
  const [ state, dispatch ] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    });
  }

  const decrement = () => {
    dispatch({
      type: DICREMENT_COUNT
    });
    // setCount(count - 1);
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0; /* if dont get a value number we asign value 0 */
    
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // setCount(count + valueToAdd );
    // setValueToAdd(0); /** after setCount is trigger, setValueToAdd input is set to 0 cleanSpace */
  }

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count: {state.count}</h1>
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
        value={state.valueToAdd || ""}
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
// components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Get counter value from Redux
  const dispatch = useDispatch();

  return (
    <div className='vh-100 w-100 d-flex justify-content-center align-items-center'>
      <div className='h-50 w-50 d-flex flex-column justify-content-center align-items-center border rounded shadow'>
      <h2>{count}</h2>
        <div>
        <button className='btn  btn-success mx-1' onClick={()=>dispatch(increment())}>Add</button>
        <button className='btn  btn-danger mx-1'onClick={()=>dispatch(decrement())}>Minus</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

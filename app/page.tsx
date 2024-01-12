"use client"
import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from './store/store';
import { decrement, decrementByValue, increment, incrementByValue } from './store/features/counterSlice';

const App = () => {
  const dispatch = useDispatch();
  const value = useAppSelector((state)=>state.counter.value)

  const handleIncrement = () =>{
    dispatch(increment())
  }

 
  const handleDecrement = () =>{
    dispatch(decrement())
  }
  
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform w-4/5 h-4/5 shadow-md rounded-md'>
      <h1 className='p-10 text-center text-xl font-medium'>
        A NextJS with Redux Toolkit state management Template
      </h1>

      <h1 className='text-center font-bold text-2xl'> 
        Counter
      </h1>
      <h1 className='text-center mt-3'>{value}</h1>

      <div className='mx-96 mt-8 flex items-center gap-x-10 '>

        <button className='bg-slate-900 text-white p-3  rounded-md hover:bg-slate-800' onClick={()=>handleIncrement()}>Increment</button>
        <button className='bg-slate-900 text-white p-3  rounded-md hover:bg-slate-800' onClick={()=>handleDecrement()}>Decrement</button>
      </div>


    </div>
  )
}

export default App
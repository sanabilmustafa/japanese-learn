'use client'
// components/VirtualKeyboard.js
import React, { useState } from 'react';
import {hiragana} from '../../../data/hiragana.json'
import {FaBeer , FaArrowRight} from 'react-icons/fa'

const VirtualKeyboard = () => {
  // Initialize the state to store the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle key clicks
  const handleKeyClick = (key) => {
    // Append the clicked key value to the input value
    setInputValue(inputValue + key);
  };

  // Function to handle the submit button click
  const handleSubmit = () => {
    // You can perform any action here, e.g., submitting the form
    //   if(inputValue == 'あい'){
    //   setInputValue('')
    //   console.log('true');
    // } else {
    //   console.log("false");
    // }
    setInputValue('')
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        className='h-12 rounded-full p-5 text-xl font-bold mx-2 my-5'
        onChange={(e) => setInputValue(e.target.value)}
      />
        <button onClick={handleSubmit} className='bg-red-200 rounded-full p-3 hover:bg-red-300'><FaArrowRight/></button>
        {/* Define your keyboard keys here */}
        <div className='keyboard'>
              <div className='grid grid-cols-12 w-1/2 gap-2'>
              {hiragana.map((char)=> {
                    return (
                        <button className='w-12 h-12 bg-green-200 flex justify-center items-center hover:bg-green-300'  onClick={() => handleKeyClick(char.Japanese)}>{char.Japanese}</button>
                    )
                })}
              </div>
          </div>
    </div>
  );
};

export default VirtualKeyboard;

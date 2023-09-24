'use client'
import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { useState, useEffect } from 'react';

const Char = ({char, bg}) => {
    const [flip, setFlip] = useState(false);

    useEffect(() => {
      let flipTimer;
  
      if (flip) {
        flipTimer = setTimeout(() => {
          setFlip(false);
        }, 2000); // 5000 milliseconds = 5 seconds
      }
  
      return () => {
        if (flipTimer) {
          clearTimeout(flipTimer);
        }
      };
    }, [flip]);
  
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal" >
            <div onClick={()=> setFlip(!flip)}>
                <div className={` w-20 h-20 rounded-md ${bg} flex flex-col justify-center items-center`}>
                  <p className='font-black text-3xl'>{char.Japanese}</p>
                  <p className='text-md text-gray-400'>{char.pronunciation}</p>
                </div>
            </div>
            <div onClick={() => setFlip(!flip)}>
                <div className={` w-20 h-20 rounded-md ${bg} flex justify-center items-center`}>
                  <p className='font-black text-3xl'>{char.pronunciation}</p>
                </div>
            </div>
    </ReactCardFlip>
  )
}

export default Char


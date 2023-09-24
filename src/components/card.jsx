'use client'
import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { useState, useEffect } from 'react';

const Card = ({item , color}) => {
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
    // border-2 border-dashed border-gray-400
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal" >
         <li className={`bg-${color}-200 glass rounded-xl  text-xl h-36 md:h-52 w-full flex flex-col justify-center items-center p-5`} onClick={()=> setFlip(!flip)}>
                <p className=' text-center text-medium cursor-pointer' key={item.id}>{item.english}</p>
                {/* <p className=' text-center text-medium cursor-pointer' >{item.category}</p> */}
          </li> 
         <li className='rounded-xl text-2xl h-36 md:h-52 bg-white border w-full flex flex-col justify-center items-center p-3' onClick={() => setFlip(!flip)}>
                <p className=' text-center text-medium text-2xl font-bold' key={item.id}>{item.japanese}</p>
                <p className='text-center text-md text-xl text-gray-500'>{item.pronunciation}</p>
                <div>
                {item.category.map((c) => {
                  if(c === 'food'){
                    {<p>{c}</p>}
                  }
                })}
                </div>
          </li> 
    </ReactCardFlip>
  )
}

export default Card

